document.addEventListener('DOMContentLoaded', () => {
    const gravarBtn = document.getElementById('gravar-btn');
    const lerBtn = document.getElementById('ler-btn');
    const incluirBtn = document.getElementById('incluir-btn');
    const nomeInput = document.getElementById('nome-input');
    const pessoasContainer = document.getElementById('pessoas-container');
    const jsonOutput = document.getElementById('json-output');

    let data = {
        pessoas: []
    };

    function render() {
        pessoasContainer.innerHTML = '';

        data.pessoas.forEach((pessoa, pessoaIndex) => {
            const pessoaDiv = document.createElement('div');
            pessoaDiv.className = 'pessoa-item';
            pessoaDiv.innerHTML = `
                <div class="pessoa-header">
                    <span>${pessoa.nome}</span>
                    <button class="remove-pessoa-btn" data-index="${pessoaIndex}">Remover</button>
                </div>
            `;

            pessoa.filhos.forEach((filho, filhoIndex) => {
                const filhoDiv = document.createElement('div');
                filhoDiv.className = 'filho-item';
                filhoDiv.innerHTML = `
                    <div class="filho-header">
                        <span>- ${filho}</span>
                        <button class="remove-filho-btn" data-pessoa-index="${pessoaIndex}" data-filho-index="${filhoIndex}">Remover filho</button>
                    </div>
                `;
                pessoaDiv.appendChild(filhoDiv);
            });
            
            const addFilhoBtn = document.createElement('button');
            addFilhoBtn.textContent = 'Adicionar filho';
            addFilhoBtn.className = 'add-filho-btn';
            addFilhoBtn.dataset.index = pessoaIndex;
            pessoaDiv.appendChild(addFilhoBtn);

            pessoasContainer.appendChild(pessoaDiv);
        });

        jsonOutput.value = JSON.stringify(data, null, 2); 
    }

    function addPessoa() {
        const nome = nomeInput.value.trim();
        if (nome) {
            data.pessoas.push({
                nome: nome,
                filhos: []
            });
            nomeInput.value = '';
            render();
        } else {
            alert('Por favor, insira um nome.');
        }
    }

    function addFilho(pessoaIndex) {
        const nomeFilho = prompt('Digite o nome do filho:');
        if (nomeFilho && nomeFilho.trim()) {
            data.pessoas[pessoaIndex].filhos.push(nomeFilho.trim());
            render();
        }
    }

    function removePessoa(pessoaIndex) {
        if (confirm(`Tem certeza que deseja remover ${data.pessoas[pessoaIndex].nome}?`)) {
            data.pessoas.splice(pessoaIndex, 1);
            render();
        }
    }

    function removeFilho(pessoaIndex, filhoIndex) {
        data.pessoas[pessoaIndex].filhos.splice(filhoIndex, 1);
        render();
    }
    
    async function gravarDados() {
        try {
            const response = await fetch('api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonOutput.value 
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Erro ao gravar dados:', error);
            alert('Ocorreu um erro ao gravar os dados.');
        }
    }
    
    async function lerDados() {
        try {
            const response = await fetch('api.php');
            const result = await response.json();
            if(result.pessoas) {
                data = result; 
                render(); 
                alert('Dados lidos com sucesso!');
            } else {
                alert('Nenhum dado encontrado no banco ou ocorreu um erro.');
            }
        } catch (error) {
            console.error('Erro ao ler dados:', error);
            alert('Ocorreu um erro ao ler os dados.');
        }
    }

    incluirBtn.addEventListener('click', addPessoa);
    gravarBtn.addEventListener('click', gravarDados);
    lerBtn.addEventListener('click', lerDados);

    pessoasContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-filho-btn')) {
            addFilho(e.target.dataset.index);
        }
        if (e.target.classList.contains('remove-pessoa-btn')) {
            removePessoa(e.target.dataset.index);
        }
        if (e.target.classList.contains('remove-filho-btn')) {
            removeFilho(e.target.dataset.pessoaIndex, e.target.dataset.filhoIndex);
        }
    });

    render();
});