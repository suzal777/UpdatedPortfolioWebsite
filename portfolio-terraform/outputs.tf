output "s3_bucket_name" {
  value = module.s3_bucket.bucket_name
}

output "cloudfront_distribution_id" {
  value = module.cloudfront.distribution_id
}
