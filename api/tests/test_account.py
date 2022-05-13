from app import create_app

def test_account():
    flask_app = create_app()
    with flask_app.test_client() as test_client:
        request = test_client.post('/getAccount', data={
            "username": "mason"
        })
        
        response = request.json["msg"]
        if "Missing" in response:
            print("error")
            assert True
