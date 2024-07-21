from django.db import models

class Item(models.Model):
    first_name = models.CharField(max_length=250, null=True)
    middle_name = models.CharField(max_length=250, blank=True, null=True)
    last_name = models.CharField(max_length=250, null=True)
    address = models.CharField(max_length=250, blank=True, null=True)
    permanent_address = models.CharField(max_length=250, blank=True, null=True)
    zip_code = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(max_length=250, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    place_of_birth = models.CharField(max_length=250, blank=True, null=True)
    civil_status = models.CharField(max_length=250, blank=True, null=True)
    SEX_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]
    sex = models.CharField(max_length=1, choices=SEX_CHOICES, blank=True, null=True)
    height = models.CharField(max_length=20, blank=True, null=True)
    weight = models.CharField(max_length=20, blank=True, null=True)
    bloodtype = models.CharField(max_length=250, blank=True, null=True)
    citizenship = models.CharField(max_length=250, blank=True, null=True)
    gsis = models.CharField(max_length=20, blank=True, null=True)
    pag_ibig_no = models.CharField(max_length=20, blank=True, null=True)
    philhealth = models.CharField(max_length=20, blank=True, null=True)
    sss = models.CharField(max_length=20, blank=True, null=True)
    tin = models.CharField(max_length=20, blank=True, null=True)
    agency_employee_no = models.CharField(max_length=20, blank=True, null=True)
    occupation = models.CharField(max_length=250, blank=True, null=True)
    employee_business = models.CharField(max_length=250, blank=True, null=True)
    business_address = models.CharField(max_length=250, blank=True, null=True)
    elementary_school = models.CharField(max_length=150, null=True, blank=True)
    elementary_degree = models.CharField(max_length=150, null=True, blank=True)
    elementary_period_from = models.DateField(null=True, blank=True)
    elementary_period_to = models.DateField(null=True, blank=True)
    elementary_highest_level = models.CharField(max_length=50, null=True, blank=True)
    elementary_year_graduated = models.IntegerField(null=True, blank=True)
    elementary_academic_honors = models.CharField(max_length=100, null=True, blank=True)
    secondary_school = models.CharField(max_length=150, null=True, blank=True)
    secondary_degree = models.CharField(max_length=150, null=True, blank=True)
    secondary_period_from = models.DateField(null=True, blank=True)
    secondary_period_to = models.DateField(null=True, blank=True)
    secondary_highest_level = models.CharField(max_length=50, null=True, blank=True)
    secondary_year_graduated = models.IntegerField(null=True, blank=True)
    secondary_academic_honors = models.CharField(max_length=100, null=True, blank=True)
    vocational_school = models.CharField(max_length=150, null=True, blank=True)
    vocational_degree = models.CharField(max_length=150, null=True, blank=True)
    vocational_period_from = models.DateField(null=True, blank=True)
    vocational_period_to = models.DateField(null=True, blank=True)
    vocational_highest_level = models.CharField(max_length=50, null=True, blank=True)
    vocational_year_graduated = models.IntegerField(null=True, blank=True)
    vocational_academic_honors = models.CharField(max_length=100, null=True, blank=True)
    college_school = models.CharField(max_length=150, null=True, blank=True)
    college_degree = models.CharField(max_length=150, null=True, blank=True)
    college_period_from = models.DateField(null=True, blank=True)
    college_period_to = models.DateField(null=True, blank=True)
    college_highest_level = models.CharField(max_length=50, null=True, blank=True)
    college_year_graduated = models.IntegerField(null=True, blank=True)
    college_academic_honors = models.CharField(max_length=100, null=True, blank=True)
    graduate_school = models.CharField(max_length=150, null=True, blank=True)
    graduate_degree = models.CharField(max_length=150, null=True, blank=True)
    graduate_period_from = models.DateField(null=True, blank=True)
    graduate_period_to = models.DateField(null=True, blank=True)
    graduate_highest_level = models.CharField(max_length=50, null=True, blank=True)
    graduate_year_graduated = models.IntegerField(null=True, blank=True)
    graduate_academic_honors = models.CharField(max_length=100, null=True, blank=True)


    
    


    def __str__(self) -> str:
        return f'{self.first_name} {self.middle_name} {self.last_name}'