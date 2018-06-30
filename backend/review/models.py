import telegram
from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

from dside.lang_codes import LANGUAGES
import django.utils.timezone

# Create your models here.
from dside.settings import BOT_TOKEN, CHAT_ID


class ReviewText(models.Model):
    text = models.TextField()
    classes = models.CharField(max_length=100)
    review = models.ForeignKey('ReviewItem', on_delete=models.CASCADE)
    lang_code = models.CharField(choices=LANGUAGES, max_length=5)

    def __str__(self):
        return self.text


class Grader(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.ImageField()

    def __str__(self):
        return self.name


class ReviewItem(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField(default=django.utils.timezone.now)
    grade = models.CharField(max_length=2, choices=(('1', '1'), ('2', '2',), ('3', '3'), ('4', '4'), ('5', '5')))
    sent_by = models.CharField(max_length=100)
    graded_by = models.ForeignKey('Grader', on_delete=models.DO_NOTHING)
    social_link = models.URLField()
    views = models.IntegerField(default=0)

    def __str__(self):
        return "{} by {}".format(self.name, self.sent_by)


class ReviewRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    social_link = models.URLField()
    text = models.TextField()
    title = models.CharField(max_length=100)
    image = models.FileField()


@receiver(pre_save, sender=ReviewRequest)
def request_handler(sender, instance, **kwargs):
    bot = telegram.Bot(token=BOT_TOKEN)

    text = """
Новая заявка на оценку!
Отправил: {name}
Email: {email}
Ссылка на <a href="{link}">соцсети</a>


<b>{title}</b>
{text}
""".format(name=instance.name, email=instance.email, link=instance.social_link, title=instance.title,
           text=instance.text)
    image = instance.image
    bot.send_message(chat_id=CHAT_ID,
                     text=text, parse_mode=telegram.ParseMode.HTML, disable_web_page_preview=True)
    bot.send_document(chat_id=CHAT_ID, document=image, caption="Прикрепленный файл")
