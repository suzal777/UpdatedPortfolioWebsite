variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "s3_bucket_name" {
  description = "S3 bucket name"
  type        = string
  default     = "myportfolio.suzal777.online"
}

variable "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  type        = string
  default     = "E1ECBGZURZCZ8U"
}

variable "ssl_certificate_arn" {
  type = string
  default     = "arn:aws:acm:us-east-1:545009862004:certificate/b541b555-32d5-4907-aa13-eb0b2e91318e"
}

variable "custom_domain_name" {
  type = string
  default     = "myportfolio.suzal777.online"
}
