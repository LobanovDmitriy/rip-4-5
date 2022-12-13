from django.contrib import admin
from .models import Services, UserService, User

admin.site.unregister(User)


@admin.register(Services)
class ServicesAdmin(admin.ModelAdmin):
    pass


@admin.register(UserService)
class UserServiceAdmin(admin.ModelAdmin):
    pass


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass
