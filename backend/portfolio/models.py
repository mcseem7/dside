from django.db import models
import django.utils.timezone
from dside.lang_codes import LANGUAGES


class Category(models.Model):
    tag = models.CharField(max_length=50)

    def __str__(self):
        return self.tag


class CategoryTranslation(models.Model):
    name = models.CharField(max_length=100)
    lang_code = models.CharField(choices=LANGUAGES, max_length=5, verbose_name="Language")
    category = models.ForeignKey('Category', on_delete=models.CASCADE)


class Attachment(models.Model):
    kind = models.CharField(verbose_name="type", choices=(("video", "Video"), ("image", "Image")), max_length=10)
    content = models.FileField()
    portfolio_item = models.ForeignKey('PortfolioItem', on_delete=models.CASCADE)

    def __str__(self):
        return "{} {}".format(self.kind, self.id)


class Attachment2(models.Model):
    kind = models.CharField(verbose_name="type", choices=(("html", "HTML"), ("image", "Image")), max_length=10)
    html = models.TextField(blank=True)
    image = models.ImageField(blank=True)
    portfolio_item = models.ForeignKey('PortfolioItem', on_delete=models.CASCADE)

    def __str__(self):
        return "{} {}".format(self.kind, self.id)


class PortfolioTranslation(models.Model):
    lang_code = models.CharField(choices=LANGUAGES, max_length=5, verbose_name="Language")
    name = models.CharField(max_length=100)
    description = models.TextField()
    task = models.TextField()
    decision = models.TextField()

    portfolio_item = models.ForeignKey('PortfolioItem', on_delete=models.CASCADE)


class PortfolioItem(models.Model):
    base_name = models.CharField(max_length=100, verbose_name="Technical name(only for panel)")
    date = models.DateTimeField(default=django.utils.timezone.now)
    main_image = models.ImageField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    logotype = models.ImageField
    watches = models.IntegerField(default=0)
    watching_time = models.IntegerField()
    days_developing = models.IntegerField(default=7)

    similar_items = models.ManyToManyField('PortfolioItem', verbose_name="Similar portfolio items", blank=True)

    def __str__(self):
        return self.base_name