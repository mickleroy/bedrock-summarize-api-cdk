# Summarize API CDK Bedrock

This Typescript CDK project creates an API gateway and Lambda to summarize an input text using Amazon Bedrock.

The Amazon Titan Text Lite model must be enabled on the target account.

![Summarize API Design](/summarize-api-design.png)

**Request**
```
{
    "inputText": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is
    attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
    type specimen book. It usually begins with"
}
```

**Response**
```
{
    "summary": "\nLorem ipsum is dummy text used in print, graphic, and web design. It is attributed to an unknown typesetter in the 15th century."
}
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
