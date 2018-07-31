import telegram
from django.db import models

# Create your models here.
from dside.lang_codes import LANGUAGES
from django.db.models.signals import pre_save
from django.dispatch import receiver
import django.utils.timezone

from dside.settings import BOT_TOKEN, CHAT_ID


class BlogCategory(models.Model):
    tag = models.CharField(max_length=50, unique=True)
    color = models.CharField(max_length=10, verbose_name="HEX Color")

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.tag


class BlogCategoryTranslation(models.Model):
    category = models.ForeignKey('BlogCategory', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    lang_code = models.CharField(choices=LANGUAGES, max_length=5, verbose_name="Language")


class BlogItem(models.Model):
    base_name = models.CharField(max_length=100, verbose_name="Technical name(only for panel)")
    date = models.DateTimeField(default=django.utils.timezone.now)
    category = models.ForeignKey('BlogCategory', on_delete=models.CASCADE)
    watching_time = models.IntegerField()
    views = models.IntegerField(default=0)
    main_image = models.ImageField()
    thumbnail = models.ImageField()

    class Meta:
        ordering = ("date",)

    def __str__(self):
        return self.base_name


class BlogItemTranslation(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    body = models.TextField()
    lang_code = models.CharField(choices=LANGUAGES, max_length=5, verbose_name="Language")

    blog_item = models.ForeignKey('BlogItem', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class TopicSuggestion(models.Model):
    text = models.TextField()
    name = models.CharField(max_length=100)
    email = models.EmailField()
    social_link = models.URLField(blank=True)


@receiver(pre_save, sender=TopicSuggestion)
def request_handler(sender, instance, **kwargs):
    bot = telegram.Bot(token=BOT_TOKEN)

    text = """
Новое предложение для статьи в блоге!
Отправил: {name}
Email: {email}
Ссылка на <a href="{link}">соцсети</a>

{text}
""".format(name=instance.name, email=instance.email, link=instance.social_link,
           text=instance.text)

    bot.send_message(chat_id=CHAT_ID,
                     text=text, parse_mode=telegram.ParseMode.HTML, disable_web_page_preview=True)


