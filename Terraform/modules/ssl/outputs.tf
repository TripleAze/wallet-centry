# terraform/modules/ssl/outputs.tf

output "certificate_arn" {
  description = "ARN of the SSL certificate"
  value       = aws_acm_certificate.app.arn
}

output "domain_name" {
  description = "Domain name of the certificate"
  value       = aws_acm_certificate.app.domain_name
}

output "validation_complete" {
  description = "Whether certificate validation is complete"
  value       = var.domain_name != "" ? aws_acm_certificate_validation.app[0].id : null
}