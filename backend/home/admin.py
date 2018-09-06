from django.contrib import admin

# Register your models here.
from home.models import LimitedOfferTranslation, LimitedOffer


class LOTInline(admin.StackedInline):
    verbose_name_plural = "limited offer translations"
    verbose_name = "translation"
    model = LimitedOfferTranslation

    extra = 1


class LOAdmin(admin.ModelAdmin):
    list_display = ['date']
    inlines = [LOTInline]


admin.site.register(LimitedOffer, LOAdmin)