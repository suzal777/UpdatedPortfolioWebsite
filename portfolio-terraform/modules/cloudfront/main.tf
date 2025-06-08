resource "aws_cloudfront_distribution" "this" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = var.default_root_object

  origin {
    domain_name              = "${var.origin_bucket_name}.s3.us-east-1.amazonaws.com"
    origin_id                = "${var.origin_bucket_name}.s3.us-east-1.amazonaws.com"
    origin_access_control_id = var.oac_id

    connection_attempts = 3
    connection_timeout  = 10
  }


  default_cache_behavior {
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    target_origin_id       = "${var.origin_bucket_name}.s3.us-east-1.amazonaws.com"
    viewer_protocol_policy = "allow-all"

    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    compress     = true
    min_ttl      = 0
    default_ttl  = 0
    max_ttl      = 0
  }


  viewer_certificate {
    acm_certificate_arn      = var.ssl_certificate_arn # arn:aws:acm:us-east-1:545009862004:certificate/...
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = ["${var.custom_domain_name}"] # myportfolio.suzal777.online

  # IMPORTANT: Remove the 'tags' block if you don't use tags.
}

# Removed aws_cloudfront_origin_access_identity as you're using OAC, not OAI

output "distribution_id" {
  value = aws_cloudfront_distribution.this.id
}

output "distribution_domain_name" {
  value = aws_cloudfront_distribution.this.domain_name
}
