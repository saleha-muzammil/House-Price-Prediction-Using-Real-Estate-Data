from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    input_data = pd.DataFrame(request.json['data'], index=[0])
    
    input_data = input_data.dropna()

    print('ok') 

    input_data['bedrooms'] = input_data['bedrooms'].astype(float)
    input_data['floors'] = input_data['floors'].astype(float)
    input_data['sqft_living'] = input_data['sqft_living'].astype(float)
    input_data['sqft_lot'] = input_data['sqft_lot'].astype(float)
    input_data['condition'] = input_data['condition'].astype(float)
    input_data['sqft_above'] = input_data['sqft_above'].astype(float)
    input_data['sqft_basement'] = input_data['sqft_basement'].astype(float)
    input_data['yr_built'] = input_data['yr_built'].astype(float)
    input_data['yr_renovated'] = input_data['yr_renovated'].astype(float)

    numeric_columns = ['bedrooms', 'sqft_living', 'sqft_lot', 'floors', 'condition',
       'sqft_above', 'sqft_basement', 'yr_built', 'yr_renovated',]
       

    
    print('lol:' ,input_data)

    categorical_columns = ['city']
    input_data = pd.get_dummies(input_data, columns=categorical_columns)
    
    all_categorical_columns = ['city_algona', 'city_auburn', 'city_beaux arts village',
       'city_bellevue', 'city_black diamond', 'city_bothell', 'city_burien',
       'city_carnation', 'city_clyde hill', 'city_covington',
       'city_des moines', 'city_duvall', 'city_enumclaw', 'city_fall city',
       'city_federal way', 'city_inglewoodfinn hill', 'city_issaquah',
       'city_kenmore', 'city_kent', 'city_kirkland', 'city_lake forest park',
       'city_maple valley', 'city_medina', 'city_mercer island', 'city_milton',
       'city_newcastle', 'city_normandy park', 'city_north bend',
       'city_pacific', 'city_preston', 'city_ravensdale', 'city_redmond',
       'city_renton', 'city_sammamish', 'city_seatac', 'city_seattle',
       'city_shoreline', 'city_skykomish', 'city_snoqualmie',
       'city_snoqualmie pass', 'city_tukwila', 'city_vashon',
       'city_woodinville', 'city_yarrow point']

    missing_columns = set(all_categorical_columns) - set(input_data.columns)
    for col in missing_columns: 
       input_data[col] = 0

    all_columns = numeric_columns + all_categorical_columns
    input_data = input_data[all_columns]
    print('Input data:' , input_data)
    predictions = model.predict(input_data)
    predictions = predictions.tolist()
    return jsonify(predictions)

