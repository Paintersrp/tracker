# Generated by Django 4.1.3 on 2023-06-13 17:34

import backend.customs
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("tables", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="column",
            name="icon",
            field=backend.customs.CustomCharField(
                blank=True, help_text="Select Icon", max_length=40, verbose_name="Icon"
            ),
        ),
    ]
