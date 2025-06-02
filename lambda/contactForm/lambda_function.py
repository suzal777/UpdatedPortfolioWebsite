import json
import boto3

sns = boto3.client('sns')

def lambda_handler(event, context):
    try:
        # Parse the incoming request body
        body = json.loads(event['body'])

        name = body.get('name')
        email = body.get('email')
        message = body.get('message')

        # Format the SNS message
        sns_message = f"""
        Contact Form Submission:
        Name: {name}
        Email: {email}
        Message: {message}
        """

        # Send to SNS
        response = sns.publish(
            TopicArn='arn:aws:sns:us-east-1:545009862004:PortfolioTopic',
            Subject='Website Form Submission',
            Message=sns_message
        )

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Notification sent successfully'})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
