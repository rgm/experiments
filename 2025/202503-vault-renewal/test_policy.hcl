path "secret/data/test_path/*" {
  capabilities = ["read"]
}

path "secret/metadata/test_path/*" {
  capabilities = ["list"]
}
