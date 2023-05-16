from django.urls import path
from .views import *


urlpatterns = [
    path(
        "table/",
        TableAPIView.as_view(),
        name="table-list",
    ),
    path(
        "table/<int:pk>/",
        TableDetailAPIView.as_view(),
        name="table-detail",
    ),
    path(
        "table/bulk/",
        TableBulkAPIView.as_view(),
        name="table-bulk-detail",
    ),
    path(
        "column/",
        ColumnAPIView.as_view(),
        name="column-list",
    ),
    path(
        "column/<int:pk>/",
        ColumnDetailAPIView.as_view(),
        name="column-detail",
    ),
    path(
        "column/bulk/",
        ColumnBulkAPIView.as_view(),
        name="column-bulk-detail",
    ),
    path(
        "row/",
        RowAPIView.as_view(),
        name="row-list",
    ),
    path(
        "row/<int:pk>/",
        RowDetailAPIView.as_view(),
        name="row-detail",
    ),
    path(
        "row/bulk/",
        RowBulkAPIView.as_view(),
        name="row-bulk-detail",
    ),
    path(
        "cell/",
        CellAPIView.as_view(),
        name="cell-list",
    ),
    path(
        "cell/<int:pk>/",
        CellDetailAPIView.as_view(),
        name="cell-detail",
    ),
    path(
        "cell/bulk/",
        CellBulkAPIView.as_view(),
        name="cell-bulk-detail",
    ),
    path(
        "table-builder/",
        TableBuilder.as_view(),
        name="table-builder",
    ),
]