- What is serverless

Serverless is a cloud-native development model that allows developers to build and run applications without having to manage servers.

There are still servers in serverless, but they are abstracted away from app development.
 A cloud provider handles the routine work of provisioning, maintaining, and scaling the server infrastructure. 
 Developers can simply package their code in containers for deployment.

Once deployed, serverless apps respond to demand and automatically scale up and down as needed.
Serverless offerings from public cloud providers are usually metered on-demand through an event-driven execution model. 
As a result, when a serverless function is sitting idle, it doesn’t cost anything.


# Lambda

### login by saml2aws

1. saml2aws install
2. saml2aws configure  找到okta
3.~/.saml2aws
4. loging:  

  `saml2aws login --profile tw-aws-beach`

5 .
export AWS_PROFILE=tw-aws-beach

aws sts get-caller-identity --profile tw-aws-beach

6.upload .zip archive

```
aws lambda update-function-code --function-name qiqi-lambda --zip-file

fileb://function.zip

--region ap-southeast-2rea
```

### create cloudWatch schedule rule by cli

1.create a rule

```jsx
aws events put-rule \
--name qiqi-scheduled-rule \
--schedule-expression 'rate(3 days)'
```

2.add to cloudwatch events

```jsx
aws lambda add-permission \
--function-name qiqi-lambda \
--statement-id qiqi-scheduled-event \
--action 'lambda:InvokeFunction' \
--principal [events.amazonaws.com](http://events.amazonaws.com/) \
--source-arn arn:aws:events:ap-southeast-2:123456789012:rule/qiiq-scheduled-rule
```
3.push
```aws events put-targets --rule qiqi-scheduled-rule --targets file://targets.json
```
