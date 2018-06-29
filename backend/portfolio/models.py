from django.db import models
import django.utils.timezone


class Category(models.Model):
    name = models.CharField(max_length=100)
    tag = models.CharField(max_length=50)

    def __str__(self):
        return self.name


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


class PortfolioItem(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField(default=django.utils.timezone.now)
    main_image = models.ImageField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    logotype = models.ImageField
    watches = models.IntegerField(default=0)
    watching_time = models.IntegerField()

    description = models.TextField()
    task = models.TextField()
    decision = models.TextField()

    similar_items = models.ManyToManyField('PortfolioItem', verbose_name="Similar portfolio items", blank=True)

    def __str__(self):
        return self.name
