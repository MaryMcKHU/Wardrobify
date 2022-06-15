from django.contrib import admin

# Register your models here.
from .models import BinVO, Shoe

@admin.register(BinVO)
class BinVOAdmin(admin.ModelAdmin):
    pass

@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    pass