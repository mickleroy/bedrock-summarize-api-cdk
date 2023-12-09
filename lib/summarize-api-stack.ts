import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import path = require('path');

export class SummarizeApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apiGateway = new apigateway.RestApi(this, 'SummarizeApi', {
      restApiName: 'Summarize API',
    });

    const lambdaFunction = new NodejsFunction(this, 'SummarizeFunction', {
      functionName: 'SummarizeFunction',
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'handler',
      entry: path.join(__dirname, '..', 'functions', 'summarize.ts'),
    });

    const apiGatewayIntegration = new apigateway.LambdaIntegration(lambdaFunction);

    const method = apiGateway.root.addMethod('POST', apiGatewayIntegration, {
      authorizationType: apigateway.AuthorizationType.NONE
    });

    lambdaFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['bedrock:InvokeModel'],
        resources: ['*'],
      })
    );
  }
}
