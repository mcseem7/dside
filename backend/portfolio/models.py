from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    tag = models.CharField(max_length=50)


class Attachment(models.Model):
    kind = models.CharField(verbose_name="type", choices=(("Video", "video"), ("Image", "image")))
    content = models.FileField()
    portfolio_item = models.ForeignKey('PortfolioItem', on_delete=models.CASCADE)


class Attachment2(models.Model):
    kind = models.CharField(verbose_name="type", choices=(("HTML", "html"), ("Image", "image")))
    html = models.TextField(blank=True)
    image = models.ImageField(blank=True)
    portfolio_item = models.ForeignKey('PortfolioItem', on_delete=models.CASCADE)


class PortfolioItem(models.Model):
    main_image = models.ImageField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    logotype = models.ImageField
    watches = models.IntegerField(default=0)
    watching_time = models.IntegerField()

    description = models.TextField()
    task = models.TextField()
    decision = models.TextField()

    simillar_items = models.ManyToManyField('PortfolioItem', limit_choices_to=6)
