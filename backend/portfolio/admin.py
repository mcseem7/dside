from django import forms
from django.contrib import admin
# Register your models here.
from trumbowyg.widgets import TrumbowygWidget

from portfolio.models import *


class PortfolioItemForm(forms.ModelForm):
    class Meta:
        model = PortfolioItem
        widgets = {
            'description': TrumbowygWidget(),
            'task': TrumbowygWidget(),
            'decision': TrumbowygWidget(),
        }
        exclude = ('id',)




class AttachmentInLine(admin.StackedInline):
    verbose_name_plural = "Images or Videos"
    verbose_name = "Attachment"
    model = Attachment
    max_num = 3


class Attachment2InLine(admin.StackedInline):
    verbose_name_plural = "Images or HTMLs"
    verbose_name = "Attachment"
    model = Attachment2
    max_num = 3


class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'watches', 'watching_time', 'date')
    list_filter = ('date', 'category')
    search_fields = ('description', 'name', 'task', 'decision')
    inlines = (AttachmentInLine, Attachment2InLine)

    form = PortfolioItemForm
    readonly_fields = ('watches',)

    filter_horizontal = ('similar_items',)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'tag')


admin.site.register(PortfolioItem, PortfolioItemAdmin)
admin.site.register(Category, CategoryAdmin)
# admin.site.register()
# admin.site.register()
