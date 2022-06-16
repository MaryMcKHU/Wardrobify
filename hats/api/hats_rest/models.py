from django.db import models


class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    section_number = models.PositiveSmallIntegerField(default=1)
    shelf_number = models.PositiveSmallIntegerField(default=1)
    import_href = models.CharField(max_length=200, unique=True)


class Hat(models.Model):
    fabric = models.CharField(max_length=100)
    style = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    picture = models.URLField(null=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.CASCADE,
    )