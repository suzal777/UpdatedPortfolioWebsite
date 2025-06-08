terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# S3 Module
module "s3_bucket" {
  source                     = "./modules/s3"
  bucket_name                = var.s3_bucket_name
}

# CloudFront Module
module "cloudfront" {
  source              = "./modules/cloudfront"
  origin_bucket_name  = var.s3_bucket_name
  ssl_certificate_arn = var.ssl_certificate_arn  # provide your ACM cert ARN here
  custom_domain_name  = var.custom_domain_name   # e.g. "portfolio.suzal777.online"
}
