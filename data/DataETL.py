#!/usr/bin/env python3

import GenerateData
from pymongo import MongoClient
import pandas as pd 
import numpy as np


def db_connection():
    
    try:
        client = MongoClient("localhost", 27017)
    except:
        print("Something went wrong, this is very useful exception raise!")

    return client
    

def main():
    # Create and generate project object and samples
    project_df = GenerateData.ProjectDataFrame()
    project_df.create_project_samples()

    # Create and generate tasks object and samples
    task_df = GenerateData.TaskDataFrame()
    task_df.create_task_samples()

    # Establish connection and put data into MongoDB
    client = db_connection()
    db = client.project_managementdb

    # Insert generated data into mongo collections named projects and tasks in the project...db
    db.projects.insert_many(project_df.df.to_dict('records'))
    db.tasks.insert_many(task_df.df.to_dict('records'))

if __name__ == '__main__':
    main()