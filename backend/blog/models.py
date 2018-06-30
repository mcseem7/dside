from django.db import models

# Create your models here.
from dside.lang_codes import LANGUAGES

import django.utils.timezone


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
    watches = models.IntegerField(default=0)
    main_image = models.ImageField()
    thumbnail = models.ImageField()

    class Meta:
        ordering = ("date",)

    def __str__(self):
        return self.base_name


class BlogItemTranslation(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=250)
    body = models.TextField()
    lang_code = models.CharField(choices=LANGUAGES, max_length=5, verbose_name="Language")

    blog_item = models.ForeignKey('BlogItem', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
