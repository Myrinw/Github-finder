       class GitHub {
          constructor() {
            this.config = {
              headers: {
                Authorization: 'token  22de551dce4ccc539a1894057e2f4b92c0b19223'
              }
            }
            this.repos_count = 5
            this.repos_sort = 'created: asc'
          }
          async getUser(user) {
            const profileResponse = await fetch(
              `https://api.github.com/users/${user}`,
              this.config
            )
         
            const repoResponse = await fetch(
              `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
              this.config
            )
         
            const profile = await profileResponse.json()
         
            const repos = await repoResponse.json()
         
            return {
              profile,
              repos
            }
          }
        }