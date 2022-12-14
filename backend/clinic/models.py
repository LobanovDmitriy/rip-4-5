from django.db import models
from django.contrib.auth.models import User


class Services(models.Model):
    idservice = models.AutoField(db_column='idService', primary_key=True)  # Field name made lowercase.
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    price = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        managed = False
        db_table = 'services'
        app_label = 'clinic'
        verbose_name_plural = "Сервисы"


# class User(models.Model):
#     iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
#     user_name = models.CharField(max_length=64)
#     user_email = models.CharField(unique=True, max_length=64)
#     user_password = models.CharField(max_length=255)
#
#     def __str__(self):
#         return f'{self.user_name}'
#
#     class Meta:
#         managed = False
#         db_table = 'user'
#         app_label  = 'polls'
#         verbose_name_plural = "Пользователи"


class UserService(models.Model):
    iduserservice = models.AutoField(db_column='idUserService', primary_key=True)  # Field name made lowercase.
    id_service = models.ForeignKey(Services, models.DO_NOTHING, db_column='id_service')
    id_user = models.ForeignKey(User, models.DO_NOTHING, db_column='id_user')
    status = models.IntegerField()
    order_date = models.DateTimeField()

    def __str__(self):
        return f'{self.order_date}'

    class Meta:
        managed = False
        db_table = 'user_service'
        app_label = 'clinic'
        verbose_name_plural = "Сервисы пользователей"
