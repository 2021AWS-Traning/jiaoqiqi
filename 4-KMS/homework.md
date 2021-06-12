1.KMS 是什么服务？能解决什么问题？

AWS KMS 是一项托管式服务，让您能够轻松地创建和控制用于加密操作的密钥。
该服务为您提供可用性高的密钥生成、存储、管理和审计解决方案，
让您可以在自己的应用程序内加密您的数据或以数字方式对数据签名，
并在 AWS 服务之间对数据的加密进行控制。

2.使用 KMS key 的方式有哪些？

- 创建对称和非对称密钥，并且密钥材料只能在该服务内部使用。
- 创建对称密钥，并且密钥材料在您控制下的自定义密钥存储中生成和使用*
- 导入您自己的对称密钥材料以在该服务内部使用
- 创建对称和非对称数据密钥对以在应用程序本地使用
- 定义哪些 IAM 用户和角色可以管理密钥
- 定义哪些 IAM 用户和角色可以使用密钥加密和解密数据
- 选择每年自动轮换由该服务生成的密钥
- 临时禁用密钥，使其不能被任何人使用
- 重新启用已禁用的密钥
- 计划删除不再使用的密钥
- 通过检查 AWS CloudTrail 中的日志审计密钥的使用

3.可以对 KMS key 进行哪些操作？（至少 5 个）

创建、查看、编辑、标记、启用、禁止



1. get permission to create CMK
2. create KMS key
```shell script
aws kms create-key
{
    "KeyMetadata": {
        "AWSAccountId": "160071257600",
        "KeyId": "6a854708-0d02-4098-9ae2-585c60ab1b3f",
        "Arn": "arn:aws:kms:ap-southeast-2:160071257600:key/6a854708-0d02-4098-9ae2-585c60ab1b3f",
        "CreationDate": "2021-06-12T16:07:13.399000+08:00",
        "Enabled": true,
        "Description": "",
        "KeyUsage": "ENCRYPT_DECRYPT",
        "KeyState": "Enabled",
        "Origin": "AWS_KMS",
        "KeyManager": "CUSTOMER",
        "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
        "EncryptionAlgorithms": [
            "SYMMETRIC_DEFAULT"
        ]
    }
}
```
3. encrypt
```shell script
aws kms encrypt \
    --key-id 6a854708-0d02-4098-9ae2-585c60ab1b3f \
    --region ap-southeast-2 \
    --plaintext fileb://data.txt \
    --output text \
    --query CiphertextBlob | base64 \
    --decode > encrypt.txt
```

4. decrypt
```shell script
aws kms decrypt \
    --ciphertext-blob fileb://output.txt \
    --key-id 6a854708-0d02-4098-9ae2-585c60ab1b3f \
    --region ap-southeast-2 \
    --output text \
    --query Plaintext | base64 \
    --decode > decrypt.txt
```
