from django.http import JsonResponse
from django.shortcuts import render
from .models import Hat, LocationVO
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder


class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = [
        "import_href",
        "closet_name",
        "section_number",
        "shelf_number",
    ]


class HatEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style",
        "color",
        "picture",
        "location",
    ]
    encoders = {
        "location": LocationVOEncoder
    }


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style",
        "color",
        "picture",
        "location",
    ]
    encoders = {
        "location": LocationVOEncoder
    }


@require_http_methods(["GET", "POST"])
def api_hats(request):
    if request.method == "GET":
        hats = Hat.objects.all()
        return JsonResponse(
            hats,
            encoder=HatEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)

        try:
            href = content["location"]
            location = LocationVO.objects.get(import_href=href)
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )

        hat = Hat.objects.create(**content)
        return JsonResponse(
            {"hat": hat},
            encoder=HatDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_show_hats(request, pk):
    if request.method == "DELETE":
        count, _ = Hat.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})