from django.urls import path
from .views import *


urlpatterns = [
    path(
        "questionnaire/",
        QuestionnaireAPIView.as_view(),
        name="questionnaire-list",
    ),
    path(
        "questionnaire/<int:pk>/",
        QuestionnaireDetailAPIView.as_view(),
        name="questionnaire-detail",
    ),
    path(
        "questionnaire/bulk/",
        QuestionnaireBulkAPIView.as_view(),
        name="questionnaire-bulk-detail",
    ),
    path(
        "questionset/",
        QuestionSetAPIView.as_view(),
        name="questionset-list",
    ),
    path(
        "questionset/<int:pk>/",
        QuestionSetDetailAPIView.as_view(),
        name="questionset-detail",
    ),
    path(
        "questionset/bulk/",
        QuestionSetBulkAPIView.as_view(),
        name="questionset-bulk-detail",
    ),
    path(
        "question/",
        QuestionAPIView.as_view(),
        name="question-list",
    ),
    path(
        "question/<int:pk>/",
        QuestionDetailAPIView.as_view(),
        name="question-detail",
    ),
    path(
        "question/bulk/",
        QuestionBulkAPIView.as_view(),
        name="question-bulk-detail",
    ),
    path(
        "answerchoice/",
        AnswerChoiceAPIView.as_view(),
        name="answerchoice-list",
    ),
    path(
        "answerchoice/<int:pk>/",
        AnswerChoiceDetailAPIView.as_view(),
        name="answerchoice-detail",
    ),
    path(
        "answerchoice/bulk/",
        AnswerChoiceBulkAPIView.as_view(),
        name="answerchoice-bulk-detail",
    ),
    path(
        "questionnaireresults/",
        QuestionnaireResultsAPIView.as_view(),
        name="questionnaireresults-list",
    ),
    path(
        "questionnaireresults/<int:pk>/",
        QuestionnaireResultsDetailAPIView.as_view(),
        name="questionnaireresults-detail",
    ),
    path(
        "questionnaireresults/bulk/",
        QuestionnaireResultsBulkAPIView.as_view(),
        name="questionnaireresults-bulk-detail",
    ),
    path(
        "questionnaireresultanswer/",
        QuestionnaireResultAnswerAPIView.as_view(),
        name="questionnaireresultanswer-list",
    ),
    path(
        "questionnaireresultanswer/<int:pk>/",
        QuestionnaireResultAnswerDetailAPIView.as_view(),
        name="questionnaireresultanswer-detail",
    ),
    path(
        "questionnaireresultanswer/bulk/",
        QuestionnaireResultAnswerBulkAPIView.as_view(),
        name="questionnaireresultanswer-bulk-detail",
    ),
    path(
        "questionnaires/<int:pk>/results/",
        questionnaire_results,
        name="questionnaire_results",
    ),
]
