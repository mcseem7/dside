from django.db import models


# Create your models here.
class ReviewText(models.Model):
    text = models.TextField()
    review = models.ForeignKey('ReviewItem', on_delete=models.CASCADE)


class ReviewItem(models.Model):
    name = models.CharField(max_length=100)
    grade = models.CharField(max_length=2)
    sent_by = models.CharField(max_length=100)
    social_link = models.URLField()
    views = models.IntegerField(default=0)
