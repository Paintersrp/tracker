# Generated by Django 4.1.3 on 2023-06-13 20:31

import backend.customs
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("tables", "0002_column_icon"),
    ]

    operations = [
        migrations.AddField(
            model_name="column",
            name="link",
            field=backend.customs.CustomCharField(
                blank=True, help_text="Link Path", max_length=100, verbose_name="Link"
            ),
        ),
    ]
