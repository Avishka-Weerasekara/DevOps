resource "aws_instance" "devops_ec2" {
  ami = "ami-0f2b4fc905b0bd1f1"  # Ubuntu 24.04 (eu-north-1)
  instance_type = var.instance_type
  key_name      = var.key_name

  tags = {
    Name = "DevOps-EC2"
  }
}
