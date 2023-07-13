#!/usr/bin/env python3

import GenerateData
from pymongo import MongoClient
import pandas as pd 
import numpy as np


def db_client():
    
    try:
        client = MongoClient("localhost", 27017)
    except:
        print("Something went wrong, this is very useful exception raise!")

    return db_client()
    

def main():
    # Create and generate project object and samples
    project_df = GenerateData.ProjectDataFrame()
    project_df.create_project_samples()

    # Create and generate tasks object and samples
    task_df = GenerateData.TaskDataFrame()
    task_df.create_task_samples()

    # Establish connection and put data into MongoDB
    client = db_client()
    db = client.project_managementdb

    db.projects.insert_many(project_df.to_dict())
    db.tasks.insert_many(task_df.to_dict())


if __name__ == '__main__':
    main()