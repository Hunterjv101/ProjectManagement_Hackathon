import random
import json
import datetime
import numpy as np
import math
import pandas as pd
import datetime

'''
This script generates 1500 samples for project and tasks. The project
data will be used to predict completion time and the task attributes are
generated for the sake of app completion.

TODO:
- Move to python script and import it as a module to generate data

'''


class ProjectDataFrame:
    
    def __init__(self,project_data_filepath = None):
        
        # Assuming its csv for now because we generated the data
        if project_data_filepath is not None:
            self.df = pd.read_json(project_data_filepath)
            
        self.seed = random.seed(random.randrange(1,1000)) # Random seed just chose a number
        self.df = None

    def __str__(self):
        return '{} samples\n{} columns'.format(self.df.shape[0], self.df.shape[1])
        
    @staticmethod
    def generate_project_sample(id):
        '''
        sample = generate_sample(1). Creates a random sample with unit_id = 1
        '''
        project_dict = {
            "project_id": id,
            "team_size": random.randint(1,50),
            "budget": math.floor(random.random() * 2000000),
            # Workload is based off of story points
            "workload": random.choice(['Light','Moderate','Heavy']),
            "cumulative_experience_years": random.randint(10,200),
            "completion_time": random.randint(50,720),
        }

        return project_dict
    

    def create_project_samples(self):
        records = [self.generate_project_sample(i) for i in range(1500)]
        self.df = pd.DataFrame(records)


        
class TaskDataFrame():

    def __init__(self, task_data_filepath = None):
        
        if task_data_filepath is not None:
            self.df = pd.read_json(task_data_filepath)
        
        self.seed = random.seed(random.randrange(1,1000)) # Random seed just chose a number
        self.df = None

    def __str__(self):
        return '{} samples\n{} columns'.format(self.df.shape[0], self.df.shape[1])


    @staticmethod
    def generate_name():

        first_names = ["Allison", "John", "Becky", "Romeo", "Hunter", "Kappa", "Jing", "Jared"]
        last_names = ['Python', 'Scheme', 'Java', 'R', 'Polar', 'Mouse', 'Random', "Smith", "Flather", "Scala", "Camel"] 

        return ' '.join([random.choice(first_names),random.choice(last_names)])
    

    @staticmethod
    def generate_datetime(start,end):
        '''
        generate_datetime(start datetime,end datetime)
        '''
        return start + datetime.timedelta(
            seconds = random.randint(0, int((end - start).total_seconds())))
        

    def generate_task_sample(self,id):

        task_dict = {
        "task_id": id,
        "status": random.choice(['Complete','In progress', 'Not complete']), # Update status from due_date in dataframe
        "person_assigned": str(self.generate_name()),
        "due_date": self.generate_datetime((datetime.datetime.now()),datetime.datetime(2024,1,1)),
        "estimated_duration_days": random.randint(1,360)

        }

        return task_dict
    
    def create_task_samples(self):
        records = [self.generate_task_sample(i) for i in range(1500)]
        self.df = pd.DataFrame(records)