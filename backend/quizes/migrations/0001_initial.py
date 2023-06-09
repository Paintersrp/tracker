# Generated by Django 4.1.3 on 2023-06-12 21:43

import backend.customs
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="AnswerChoice",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "text",
                    backend.customs.CustomTextField(
                        help_text="Answer Text",
                        max_length=255,
                        verbose_name="Answer Text",
                    ),
                ),
                (
                    "value",
                    backend.customs.CustomDecimalField(
                        decimal_places=2,
                        default=0.0,
                        help_text="Answer Value",
                        max_digits=8,
                        verbose_name="Answer Value",
                    ),
                ),
                (
                    "order",
                    backend.customs.CustomPositiveIntegerField(
                        default=0,
                        help_text="Answer Ordering",
                        verbose_name="Answer Ordering",
                    ),
                ),
            ],
            options={
                "verbose_name": "Answer Choice",
                "verbose_name_plural": "Answer Choices",
                "ordering": ["question"],
            },
        ),
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "text",
                    backend.customs.CustomTextField(
                        help_text="Question Text",
                        max_length=255,
                        verbose_name="Question Text",
                    ),
                ),
                (
                    "slug",
                    backend.customs.CustomSlugField(
                        default="Placeholder",
                        help_text="Identifier",
                        verbose_name="Slug",
                    ),
                ),
                (
                    "order",
                    backend.customs.CustomPositiveIntegerField(
                        default=0,
                        help_text="Question Ordering",
                        verbose_name="Question Ordering",
                    ),
                ),
            ],
            options={
                "verbose_name": "Question",
                "verbose_name_plural": "Questions",
                "ordering": ["order"],
            },
        ),
        migrations.CreateModel(
            name="Questionnaire",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    backend.customs.CustomCharField(
                        help_text="Questionnaire Name",
                        max_length=255,
                        verbose_name="Questionnaire Name",
                    ),
                ),
                (
                    "slug",
                    backend.customs.CustomSlugField(
                        help_text="Identifier", unique=True, verbose_name="Slug"
                    ),
                ),
                (
                    "description",
                    backend.customs.CustomTextField(
                        help_text="Description",
                        max_length=500,
                        verbose_name="Description",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name": "Questionnaire",
                "verbose_name_plural": "Questionnaires",
                "ordering": ["slug"],
            },
        ),
        migrations.CreateModel(
            name="QuestionSet",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "order",
                    backend.customs.CustomPositiveIntegerField(
                        default=0,
                        help_text="Display Order",
                        verbose_name="Question Set Ordering",
                    ),
                ),
                (
                    "title",
                    backend.customs.CustomCharField(
                        help_text="Question Set Title",
                        max_length=255,
                        verbose_name="Question Set Title",
                    ),
                ),
                (
                    "description",
                    backend.customs.CustomTextField(
                        help_text="Description",
                        max_length=500,
                        verbose_name="Description",
                    ),
                ),
                (
                    "questionnaire",
                    models.ForeignKey(
                        help_text="Test",
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="question_sets",
                        to="quizes.questionnaire",
                        verbose_name="Questionnaire Link",
                    ),
                ),
            ],
            options={
                "verbose_name": "Question Set",
                "verbose_name_plural": "Question Sets",
                "ordering": ["title"],
            },
        ),
        migrations.CreateModel(
            name="QuestionnaireResults",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "contact_name",
                    backend.customs.CustomCharField(
                        help_text="Contact Full Name",
                        max_length=255,
                        verbose_name="Contact Name",
                    ),
                ),
                (
                    "contact_email",
                    backend.customs.CustomEmailField(
                        help_text="Contact Email Address",
                        max_length=255,
                        verbose_name="Contact Email",
                    ),
                ),
                (
                    "contact_phone",
                    backend.customs.CustomCharField(
                        help_text="Contact Phone Number",
                        max_length=20,
                        null=True,
                        verbose_name="Contact Phone",
                    ),
                ),
                (
                    "contact_state",
                    backend.customs.CustomCharField(
                        help_text="Contact State of Residence",
                        max_length=20,
                        null=True,
                        verbose_name="Contact State",
                    ),
                ),
                ("results", models.JSONField()),
                (
                    "questionnaire",
                    models.ForeignKey(
                        help_text="Linked Questionnaire",
                        on_delete=django.db.models.deletion.CASCADE,
                        to="quizes.questionnaire",
                        verbose_name="Questionnaire",
                    ),
                ),
            ],
            options={
                "verbose_name": "Questionnaire Results",
                "verbose_name_plural": "Questionnaire Results",
                "ordering": ["questionnaire", "contact_name"],
            },
        ),
        migrations.CreateModel(
            name="QuestionnaireResultAnswer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "question_text",
                    backend.customs.CustomCharField(
                        blank=True,
                        help_text="Question Text",
                        max_length=255,
                        null=True,
                        verbose_name="Question Text",
                    ),
                ),
                (
                    "answer_choice_text",
                    backend.customs.CustomCharField(
                        blank=True,
                        help_text="Answer Choice Text",
                        max_length=255,
                        null=True,
                        verbose_name="Answer Choice Text",
                    ),
                ),
                (
                    "answer_choice",
                    models.ForeignKey(
                        blank=True,
                        help_text="Linked Answer Choice",
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="quizes.answerchoice",
                        verbose_name="Answer Choice",
                    ),
                ),
                (
                    "question",
                    models.ForeignKey(
                        help_text="Linked Question",
                        on_delete=django.db.models.deletion.CASCADE,
                        to="quizes.question",
                        verbose_name="Question",
                    ),
                ),
                (
                    "questionnaire_result",
                    models.ForeignKey(
                        help_text="Linked Questionnaire Results",
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="answers",
                        to="quizes.questionnaireresults",
                        verbose_name="Questionnaire Results",
                    ),
                ),
            ],
            options={
                "verbose_name": "Questionnaire Result Answer Choice",
                "verbose_name_plural": "Questionnaire Result Answer Choices",
            },
        ),
        migrations.AddField(
            model_name="question",
            name="question_set",
            field=backend.customs.CustomForeignKeyField(
                help_text="Linked Question Set",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="questions",
                to="quizes.questionset",
                verbose_name="Question Set Link",
            ),
        ),
        migrations.AddField(
            model_name="answerchoice",
            name="question",
            field=backend.customs.CustomForeignKeyField(
                help_text="Linked Question",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="answer_choices",
                to="quizes.question",
                verbose_name="Question Link",
            ),
        ),
    ]
