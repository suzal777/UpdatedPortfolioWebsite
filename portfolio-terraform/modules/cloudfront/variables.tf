variable "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  type        = string
  default     = "E1ECBGZURZCZ8U"
}

variable "origin_bucket_name" {
  type        = string
  description = "Name of the S3 bucket to use as CloudFront origin"
  default     = "myportfolio.suzal777.online"
}

variable "default_root_object" {
  type        = string
  description = "Default root object for CloudFront distribution"
  default     = "index.html"
}

variable "ssl_certificate_arn" {
  type        = string
  description = "ACM SSL certificate ARN for CloudFront"
  default     = "arn:aws:acm:us-east-1:545009862004:certificate/b541b555-32d5-4907-aa13-eb0b2e91318e"
}

variable "custom_domain_name" {
  type        = string
  description = "Custom domain name (CNAME) for CloudFront distribution"
  default     = "myportfolio.suzal777.online"
}

variable "oac_id" {
  default = "E1KX4KHZLTSLPS"
}

variable "origin_id" {
  default = "myportfolio.suzal777.online.s3.us-east-1.amazonaws.com"
}