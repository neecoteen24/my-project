# SSH Authentication Setup Guide

This guide will help you set up SSH keys for Git authentication, allowing you to push code to GitHub without entering your password each time.

## Table of Contents
1. [Generating SSH Keys](#generating-ssh-keys)
2. [Adding SSH Key to GitHub](#adding-ssh-key-to-github)
3. [Testing SSH Connection](#testing-ssh-connection)
4. [Switching from HTTPS to SSH](#switching-from-https-to-ssh)
5. [Troubleshooting](#troubleshooting)

---

## Generating SSH Keys

### Step 1: Check for Existing SSH Keys

First, check if you already have SSH keys on your device:

```bash
ls -la ~/.ssh
```

Look for files like `id_rsa.pub`, `id_ed25519.pub`, or `id_ecdsa.pub`. If these exist, you already have SSH keys and can skip to [Adding SSH Key to GitHub](#adding-ssh-key-to-github).

### Step 2: Generate a New SSH Key

If you don't have SSH keys or want to create new ones for your new device:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

**Note:** If your system doesn't support Ed25519, use RSA instead:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

When prompted:
- **Enter file to save key**: Press Enter to use the default location (`~/.ssh/id_ed25519`)
- **Enter passphrase**: Enter a secure passphrase (optional but recommended)
- **Confirm passphrase**: Re-enter the same passphrase

### Step 3: Start SSH Agent

Start the SSH agent in the background:

```bash
eval "$(ssh-agent -s)"
```

### Step 4: Add SSH Key to SSH Agent

Add your SSH private key to the ssh-agent:

```bash
ssh-add ~/.ssh/id_ed25519
```

Or if you used RSA:

```bash
ssh-add ~/.ssh/id_rsa
```

---

## Adding SSH Key to GitHub

### Step 1: Copy Your SSH Public Key

Copy the SSH public key to your clipboard:

**Linux:**
```bash
cat ~/.ssh/id_ed25519.pub
```

**macOS:**
```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

**Windows (Git Bash):**
```bash
clip < ~/.ssh/id_ed25519.pub
```

### Step 2: Add Key to GitHub

1. Go to [GitHub Settings > SSH and GPG keys](https://github.com/settings/keys)
2. Click **"New SSH key"** or **"Add SSH key"**
3. In the "Title" field, add a descriptive label (e.g., "My New Laptop")
4. Paste your key into the "Key" field
5. Click **"Add SSH key"**
6. If prompted, confirm your GitHub password

---

## Testing SSH Connection

Test your SSH connection to GitHub:

```bash
ssh -T git@github.com
```

You should see a message like:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

If you see this message, your SSH setup is working correctly!

---

## Switching from HTTPS to SSH

If your repository is currently using HTTPS, you need to change the remote URL to use SSH.

### Step 1: Check Current Remote URL

```bash
git remote -v
```

If you see `https://github.com/...`, you're using HTTPS.

### Step 2: Change to SSH URL

Replace the HTTPS URL with the SSH URL:

```bash
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

For this repository specifically:

```bash
git remote set-url origin git@github.com:neecoteen24/my-project.git
```

### Step 3: Verify the Change

```bash
git remote -v
```

You should now see `git@github.com:...` instead of `https://github.com/...`

### Step 4: Test Push

Try pushing your changes:

```bash
git push
```

---

## Troubleshooting

### Problem: Permission denied (publickey)

**Solution:**
1. Make sure you've added the SSH key to GitHub
2. Verify the SSH agent is running: `eval "$(ssh-agent -s)"`
3. Add your key again: `ssh-add ~/.ssh/id_ed25519`
4. Test connection: `ssh -T git@github.com`

### Problem: Could not open a connection to your authentication agent

**Solution:**
Start the SSH agent:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Problem: ssh-add: illegal option -- K (macOS)

**Solution:**
On older macOS versions, use:
```bash
ssh-add -A ~/.ssh/id_ed25519
```

### Problem: Host key verification failed

**Solution:**
Remove the old host key and try again:
```bash
ssh-keygen -R github.com
ssh -T git@github.com
```

### Problem: Multiple SSH Keys

If you have multiple GitHub accounts or SSH keys, you may need to configure SSH config file:

1. Create or edit `~/.ssh/config`:
```bash
nano ~/.ssh/config
```

2. Add configuration:
```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
```

3. Save and test: `ssh -T git@github.com`

### Problem: SSH Key Passphrase Required Every Time

**Solution:**

**Linux:**
Add to your `~/.bashrc` or `~/.zshrc`:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519 2>/dev/null
```

**macOS:**
Add to your `~/.ssh/config`:
```
Host *
    UseKeychain yes
    AddKeysToAgent yes
    IdentityFile ~/.ssh/id_ed25519
```

Then add the key with:
```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

**Windows:**
The SSH agent should remember your key. If not, make sure you're using Git Bash and run:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

---

## Additional Resources

- [GitHub's SSH Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Git Documentation](https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key)
- [SSH Key Types Explained](https://security.stackexchange.com/questions/5096/rsa-vs-dsa-for-ssh-authentication-keys)

---

## Quick Reference

### Most Common Commands

```bash
# Generate new SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add SSH key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key (Linux/Git Bash)
cat ~/.ssh/id_ed25519.pub

# Test GitHub connection
ssh -T git@github.com

# Switch repository to SSH
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git

# Verify remote URL
git remote -v
```

---

If you're still experiencing issues after following this guide, please check the [GitHub Community Forum](https://github.community/) or open an issue in this repository.
