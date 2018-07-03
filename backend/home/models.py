from django.db import models
import django.utils.timezone
# Create your models here.
import telegram
from django.db import models

# Create your models here.
from dside.lang_codes import LANGUAGES
from django.db.models.signals import pre_save
from django.dispatch import receiver
import django.utils.timezone

from dside.settings import BOT_TOKEN, CHAT_ID, ORDERS_CHAT_ID


class Order(models.Model):
    phone = models.CharField(max_length=30)
    name = models.CharField(max_length=100)
    date = models.DateTimeField(default=django.utils.timezone.now)


@receiver(pre_save, sender=Order)
def request_handler(sender, instance, **kwargs):
    bot = telegram.Bot(token=BOT_TOKEN)

    text = """
Новый Заказ!
Отправил: {name}
Телефон: {phone}

""".format(name=instance.name, phone=instance.phone,
           )

    bot.send_message(chat_id=ORDERS_CHAT_ID,
                     text=text, parse_mode=telegram.ParseMode.HTML, disable_web_page_preview=True)
