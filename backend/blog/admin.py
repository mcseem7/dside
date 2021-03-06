from django import forms
from django.contrib import admin
from blog.models import *
# Register your models here.
from trumbowyg.widgets import TrumbowygWidget


class BlogCategoryTranslationInline(admin.StackedInline):
    verbose_name_plural = "category translations"
    verbose_name = "translation"
    model = BlogCategoryTranslation

    extra = 1


class BlogTranslationForm(forms.ModelForm):
    class Meta:
        model = BlogItemTranslation
        widgets = {
            'description': TrumbowygWidget(),
            'body': TrumbowygWidget(),
        }
        exclude = ('id',)


class BlogTranslationInline(admin.StackedInline):
    verbose_name_plural = "plost translations"
    verbose_name = "translation"
    model = BlogItemTranslation
    form = BlogTranslationForm
    extra = 1


class BlogCategoryAdmin(admin.ModelAdmin):
    list_display = ('tag',)
    inlines = (BlogCategoryTranslationInline,)


class PortfolioItemForm(forms.ModelForm):
    class Meta:
        model = BlogItem
        widgets = {
            'description': TrumbowygWidget(),
            'task': TrumbowygWidget(),
            'decision': TrumbowygWidget(),
        }
        exclude = ('id',)


class BlogItemAdmin(admin.ModelAdmin):
    list_display = ('base_name', 'category', 'views', 'watching_time', 'date')
    list_filter = ('date', 'category')
    search_fields = ('description', 'name')
    inlines = (BlogTranslationInline,)
    readonly_fields = ('views',)


class TopicSuggestionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email')
    search_fields = ('text',)
    readonly_fields = ('text', 'name', 'email')


admin.site.register(BlogItem, BlogItemAdmin)
admin.site.register(BlogCategory, BlogCategoryAdmin)
admin.site.register(TopicSuggestion, TopicSuggestionAdmin)