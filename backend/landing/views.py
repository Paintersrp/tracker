from rest_framework import generics, mixins
from rest_framework.response import Response
from .models import *
from .serializers import *
from backend.utils import get_serialized_page_data
from backend.custom_views import *


class LandingFullTestView(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        model_dict = {
            "HeroHeader": {
                "app_label": "landing",
                "get_first": True,
            },
            "SectionHeader": {
                "app_label": "landing",
                "filter": {"name__in": ["process", "news"]},
            },
            "ServiceTier": {
                "app_label": "services",
            },
            "Process": {
                "app_label": "landing",
            },
            "ContactInformation": {
                "app_label": "contact",
                "get_first": True,
            },
            "Socials": {
                "app_label": "contact",
                "get_first": True,
            },
            "Post": {
                "app_label": "posts",
                "filter": {"is_highlighted": True},
            },
        }

        data = get_serialized_page_data(model_dict, request)

        return Response(data)


class HeroBlockMainAPIView(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, generics.GenericAPIView
):
    queryset = HeroHeader.objects.all()
    serializer_class = HeroBlockSerializer

    def get_object(self):
        return HeroHeader.objects.first()

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class HeroBlockAPIView(BaseListView):
    queryset = HeroHeader.objects.all()
    serializer_class = HeroBlockSerializer
    model_class = HeroHeader


class HeroBlockDetailAPIView(BaseDetailView):
    queryset = HeroHeader.objects.all()
    serializer_class = HeroBlockSerializer
    model_class = HeroHeader


class HeroBlockBulkAPIView(BaseBulkView):
    queryset = HeroHeader.objects.all()
    serializer_class = HeroBlockSerializer
    model_class = HeroHeader


class TitleBlockAPIView(BaseListView):
    queryset = SectionHeader.objects.all()
    serializer_class = TitleBlockSerializer
    model_class = SectionHeader


class TitleBlockUpdateAPIView(BaseDetailView):
    queryset = SectionHeader.objects.all()
    serializer_class = TitleBlockSerializer
    model_class = SectionHeader


class TitleBlockDetailAPIView(BaseDetailView):
    queryset = SectionHeader.objects.all()
    serializer_class = TitleBlockSerializer
    model_class = SectionHeader
    lookup_field = "name"


class TitleBlockBulkAPIView(BaseBulkView):
    queryset = SectionHeader.objects.all()
    serializer_class = TitleBlockSerializer
    model_class = SectionHeader


class ProcessAPIView(BaseListView):
    queryset = Process.objects.all()
    serializer_class = ProcessSerializer
    model_class = Process


class ProcessDetailAPIView(BaseDetailView):
    queryset = Process.objects.all()
    serializer_class = ProcessSerializer
    model_class = Process


class ProcessBulkAPIView(BaseBulkView):
    queryset = Process.objects.all()
    serializer_class = ProcessSerializer
    model_class = Process


class LatestPostsBulkAPIView(BaseBulkView):
    queryset = LatestPosts.objects.all()
    serializer_class = LatestPostsSerializer
    model_class = LatestPosts


class LatestPostsAPIView(BaseListView):
    queryset = LatestPosts.objects.all()
    serializer_class = LatestPostsSerializer
    model_class = LatestPosts


class LatestPostsDetailView(BaseDetailView):
    queryset = LatestPosts.objects.all()
    serializer_class = LatestPostsSerializer
    model_class = LatestPosts