resource "aws_instance" "devops_ec2" {
  ami           = "ami-073130f74f5ffb161"
  instance_type = "t3.micro"
  key_name      = var.key_name

  vpc_security_group_ids = [data.aws_security_group.devops_sg.id]

  tags = {
    Name = "devops-ec2"
  }

  lifecycle {
    prevent_destroy = true
  }
}
