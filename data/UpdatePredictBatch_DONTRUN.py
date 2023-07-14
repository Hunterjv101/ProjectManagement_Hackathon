#!/usr/bin/env python3

import DataETL
import DataModule
from pymongo import MongoClient
from sklearn.linear_model import LinearRegression

'''
Will merge the file eventually.
'''

def main():
    # Use code from DataETL to make connection to local mongo server and make cursors
    client = DataETL.db_connection()
    project_db = client.project_managmentdb
    projects = project_db.projects

    # Find documents where completion_time and store in pymongo cursor
    cur = projects.find({"completion_time": ""})

    # Store the dict/BSON objects (documents) into a list
    documents = [doc for doc in cur]

    print(documents)

    '''df = DataModule.ProjectDataFrame()
    df.create_project_samples()
    model = df.run_and_evaluate_model()'''

if "__name__" == "__main__":
    main()

