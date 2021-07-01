1.CloudWatch 是什么？我们为什么要使用CloudWatch？

Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, 
developers, site reliability engineers (SREs), and IT managers. 
CloudWatch provides you with data and actionable insights to monitor your applications, 
respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. 
CloudWatch collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of AWS resources, applications, and services that run on AWS and on-premises servers. 
You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.

Can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, Route 53, and other sources.

2.CloudWatch中的metrics是什么？包括哪些种类？我们可以如何使用metrics？

Metrics are the fundamental concept in CloudWatch. 
A metric represents a time-ordered set of data points that are published to CloudWatch. 
Think of a metric as a variable to monitor, and the data points as representing the values of that variable over time. 
For example, the CPU usage of a particular EC2 instance is one metric provided by Amazon EC2. 
The data points themselves can come from any application or business activity from which you collect data.

By default, many AWS services provide free metrics for resources (such as Amazon EC2 instances, Amazon EBS volumes, and Amazon RDS DB instances). For a charge, you can also enable detailed monitoring for some resources, such as your Amazon EC2 instances, or publish your own application metrics. For custom metrics, you can add the data points in any order, and at any rate you choose. You can retrieve statistics about those data points as an ordered set of time-series data.




3.CloudWatch Events是什么？可以应用在那些场景。

Amazon CloudWatch Events delivers a near real-time stream of system events that describe changes in Amazon Web Services (AWS) resources. Using simple rules that you can quickly set up, you can match events and route them to one or more target functions or streams. CloudWatch Events becomes aware of operational changes as they occur. CloudWatch Events responds to these operational changes and takes corrective action as necessary, by sending messages to respond to the environment, activating functions, making changes, and capturing state information.

Can also use CloudWatch Events to schedule automated actions that self-trigger at certain times using cron or rate expressions. For more information


4.相关概念理解：metrics，periods，namespace，count，dimensions，statistics

periods: A period is the length of time associated with a specific Amazon CloudWatch statistic. 

namespace: A namespace is a container for CloudWatch metrics. Metrics in different namespaces are isolated from each other, so that metrics from different applications are not mistakenly aggregated into the same statistics.
           
count:The count of data points used for the statistical calculation.

dimensions:A dimension is a name/value pair that is part of the identity of a metric. You can assign up to 10 dimensions to a metric.

statistics: Statistics are metric data aggregations over specified periods of time
