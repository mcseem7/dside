from django import forms
from django.contrib import admin
# Register your models here.
from trumbowyg.widgets import TrumbowygWidget

from portfolio.models import *


class PortfolioItemForm(forms.ModelForm):
    class Meta:
        model = PortfolioTranslation
        widgets = {
            'description': TrumbowygWidget(),
            'task': TrumbowygWidget(),
            'decision': TrumbowygWidget(),
        }
        exclude = ('id',)


class AttachmentForm(forms.ModelForm):
    class Meta:
        model = Attachment
        widgets = {
            'html': TrumbowygWidget(),
        }
        exclude = ('id',)


class CategoryTranslationInline(admin.StackedInline):
    verbose_name_plural = "category translations"
    verbose_name = "translation"
    model = CategoryTranslation

    extra = 1


class PortfolioTranslationInline(admin.StackedInline):
    verbose_name_plural = "portfolio translations"
    verbose_name = "translation"
    model = PortfolioTranslation
    form = PortfolioItemForm
    extra = 1


class AttachmentInLine(admin.StackedInline):
    verbose_name_plural = "Images or Videos"
    verbose_name = "Attachment"
    model = Attachment
    max_num = 3
    extra = 1


class Attachment2InLine(admin.StackedInline):
    verbose_name_plural = "Images or HTMLs"
    verbose_name = "Attachment"
    model = Attachment2
    max_num = 3
    extra = 1
    form = AttachmentForm


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('tag',)
    inlines = (CategoryTranslationInline,)


class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ('base_name', 'hovercolor', 'projectlink', 'category', 'views', 'watching_time', 'date', 'show_on_home')
    list_filter = ('date', 'category', 'show_on_home')
    search_fields = ('description', 'name', 'task', 'decision')
    inlines = (AttachmentInLine, Attachment2InLine, PortfolioTranslationInline)


    readonly_fields = ('views',)

    filter_horizontal = ('similar_items',)


admin.site.register(PortfolioItem, PortfolioItemAdmin)
admin.site.register(Category, CategoryAdmin)
# admin.site.register()
# admin.site.register()
