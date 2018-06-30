from django.contrib import admin
from review import *

# Register your models here.
from review.models import ReviewText, ReviewItem, Grader, ReviewRequest


class ReviewTextInLine(admin.StackedInline):
    extra = 3
    model = ReviewText
    verbose_name = "text block"
    verbose_name_plural = "Reviews text blocks and translations"


class GraderAdmin(admin.ModelAdmin):
    list_display = ['name']


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'grade', 'sent_by', 'views')
    list_filter = ('date', 'grade', 'graded_by')
    inlines = (ReviewTextInLine,)
    readonly_fields = ('views',)


class RequestReviewAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "title")
    readonly_fields = ["name", "email", "text", "social_link", "title", "image"]


admin.site.register(ReviewItem, ReviewAdmin)

admin.site.register(Grader, GraderAdmin)

admin.site.register(ReviewRequest, RequestReviewAdmin)