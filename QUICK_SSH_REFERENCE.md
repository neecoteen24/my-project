# Quick SSH Reference Card

## 🔑 Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## 🚀 Start SSH Agent & Add Key
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## 📋 Copy Public Key
```bash
cat ~/.ssh/id_ed25519.pub
```
Then paste at: https://github.com/settings/keys

## ✅ Test Connection
```bash
ssh -T git@github.com
```

## 🔄 Switch to SSH
```bash
git remote set-url origin git@github.com:USERNAME/REPO.git
```

## 📖 Full Guide
See [SSH_SETUP.md](./SSH_SETUP.md) for detailed instructions and troubleshooting.

---

### Common Issues

**Permission denied (publickey)?**
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
ssh -T git@github.com
```

**Already have the key but it's not working?**
1. Check it's added to GitHub: https://github.com/settings/keys
2. Re-add to agent: `ssh-add ~/.ssh/id_ed25519`
3. Test: `ssh -T git@github.com`
