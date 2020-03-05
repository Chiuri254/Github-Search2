class Github{
  constructor(){
    this.client_id = '1a83fbf521658a5c323c';
    this.client_secret ='4a2b9af3e81b7730d4d2e86297540242de088cb4';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser (user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?
    client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
      profile,
      repos
    }
  }
}