// ==================== NOTIFICAÇÕES ====================
class Notificacao {
    static mostrar(mensagem, tipo = 'sucesso', duracao = 3000) {
        const notif = document.createElement('div');
        notif.className = `notificacao notificacao-${tipo}`;
        notif.innerHTML = `
            <div class="notif-conteudo">
                <i class="fas fa-${tipo === 'sucesso' ? 'check-circle' : tipo === 'erro' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${mensagem}</span>
            </div>
        `;
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.classList.add('mostrar');
        }, 10);
        
        setTimeout(() => {
            notif.classList.remove('mostrar');
            setTimeout(() => notif.remove(), 300);
        }, duracao);
    }
}

// ==================== GERADOR DE CÓDIGO ====================
class GeradorCodigo {
    constructor() {
        this.templates = this.inicializarTemplates();
    }

    inicializarTemplates() {
        return {
            site: {
                javascript: this.templateSiteJS,
                python: this.templateSitePython,
                php: this.templateSitePhp,
            },
            api: {
                javascript: this.templateApiJS,
                python: this.templateApiPython,
                java: this.templateApiJava,
                csharp: this.templateApiCSharp,
                php: this.templateApiPhp,
                go: this.templateApiGo,
                ruby: this.templateApiRuby,
            },
            app: {
                javascript: this.templateAppReactNative,
                java: this.templateAppAndroid,
                csharp: this.templateAppMAUI,
                python: this.templateAppKivy,
            }
        };
    }

    // ==================== TEMPLATES - SITE ====================
    templateSiteJS() {
        return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 600px;
        }
        
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        
        p {
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 Bem-vindo!</h1>
        <p>Seu site foi criado com sucesso usando o Code Generator.</p>
        <p>Comece a personalizar e adicionar seu conteúdo.</p>
    </div>
</body>
</html>`;
    }

    templateSitePython() {
        return `# Site com Flask
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return '''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Meu Site</title>
        <style>
            body { font-family: Arial; margin: 20px; text-align: center; }
            h1 { color: #333; }
        </style>
    </head>
    <body>
        <h1>🎉 Bem-vindo!</h1>
        <p>Seu site foi criado com sucesso</p>
    </body>
    </html>
    '''

if __name__ == '__main__':
    app.run(debug=True, port=5000)`;
    }

    templateSitePhp() {
        return `<?php
// Site com PHP

header('Content-Type: text/html; charset=utf-8');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
        }
        h1 { color: #333; }
    </style>
</head>
<body>
    <h1>🎉 Bem-vindo!</h1>
    <p>Seu site foi criado com sucesso em PHP</p>
    <p>Data: <?php echo date('d/m/Y H:i:s'); ?></p>
</body>
</html>`;
    }

    // ==================== TEMPLATES - API ====================
    templateApiJS() {
        return `// API com Node.js + Express
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Variáveis globais
let dados = [];
let idCounter = 1;

// Rotas
app.get('/', (req, res) => {
    res.json({ 
        status: 'API rodando',
        versao: '1.0.0',
        timestamp: new Date()
    });
});

// GET - Listar todos
app.get('/dados', (req, res) => {
    res.json({
        sucesso: true,
        total: dados.length,
        dados: dados
    });
});

// GET - Buscar por ID
app.get('/dados/:id', (req, res) => {
    const item = dados.find(d => d.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).json({ erro: 'Item não encontrado' });
    }
    res.json({ sucesso: true, dados: item });
});

// POST - Criar novo
app.post('/dados', (req, res) => {
    const novoItem = {
        id: idCounter++,
        ...req.body,
        criadoEm: new Date()
    };
    dados.push(novoItem);
    res.status(201).json({ 
        sucesso: true, 
        mensagem: 'Item criado com sucesso',
        dados: novoItem 
    });
});

// PUT - Atualizar
app.put('/dados/:id', (req, res) => {
    const item = dados.find(d => d.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).json({ erro: 'Item não encontrado' });
    }
    Object.assign(item, req.body);
    res.json({ 
        sucesso: true, 
        mensagem: 'Item atualizado com sucesso',
        dados: item 
    });
});

// DELETE - Deletar
app.delete('/dados/:id', (req, res) => {
    const index = dados.findIndex(d => d.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ erro: 'Item não encontrado' });
    }
    const itemRemovido = dados.splice(index, 1);
    res.json({ 
        sucesso: true, 
        mensagem: 'Item deletado com sucesso',
        dados: itemRemovido[0]
    });
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        erro: 'Erro interno do servidor',
        mensagem: err.message 
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`✅ API rodando em http://localhost:\${PORT}\`);
});`;
    }

    templateApiPython() {
        return `# API com Flask
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Dados em memória
dados = []
id_counter = 1

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'status': 'API rodando',
        'versao': '1.0.0',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/dados', methods=['GET'])
def listar_dados():
    return jsonify({
        'sucesso': True,
        'total': len(dados),
        'dados': dados
    })

@app.route('/dados/<int:id>', methods=['GET'])
def obter_dado(id):
    item = next((d for d in dados if d['id'] == id), None)
    if not item:
        return jsonify({'erro': 'Item não encontrado'}), 404
    return jsonify({'sucesso': True, 'dados': item})

@app.route('/dados', methods=['POST'])
def criar_dado():
    global id_counter
    novo_item = {
        'id': id_counter,
        **request.json,
        'criadoEm': datetime.now().isoformat()
    }
    id_counter += 1
    dados.append(novo_item)
    return jsonify({
        'sucesso': True,
        'mensagem': 'Item criado com sucesso',
        'dados': novo_item
    }), 201

@app.route('/dados/<int:id>', methods=['PUT'])
def atualizar_dado(id):
    item = next((d for d in dados if d['id'] == id), None)
    if not item:
        return jsonify({'erro': 'Item não encontrado'}), 404
    item.update(request.json)
    return jsonify({
        'sucesso': True,
        'mensagem': 'Item atualizado com sucesso',
        'dados': item
    })

@app.route('/dados/<int:id>', methods=['DELETE'])
def deletar_dado(id):
    global dados
    item = next((d for d in dados if d['id'] == id), None)
    if not item:
        return jsonify({'erro': 'Item não encontrado'}), 404
    dados = [d for d in dados if d['id'] != id]
    return jsonify({
        'sucesso': True,
        'mensagem': 'Item deletado com sucesso',
        'dados': item
    })

@app.errorhandler(500)
def erro_interno(error):
    return jsonify({
        'erro': 'Erro interno do servidor',
        'mensagem': str(error)
    }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)`;
    }

    templateApiJava() {
        return `// API em Java (Spring Boot)
package com.example.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.*;

@SpringBootApplication
public class ApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }
}

@RestController
@RequestMapping("/api")
class ApiController {
    private List<Map<String, Object>> dados = new ArrayList<>();
    private int idCounter = 1;

    @GetMapping("/")
    public Map<String, Object> home() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "API rodando");
        response.put("versao", "1.0.0");
        response.put("timestamp", LocalDateTime.now());
        return response;
    }

    @GetMapping("/dados")
    public Map<String, Object> listarDados() {
        Map<String, Object> response = new HashMap<>();
        response.put("sucesso", true);
        response.put("total", dados.size());
        response.put("dados", dados);
        return response;
    }

    @PostMapping("/dados")
    public Map<String, Object> criarDado(@RequestBody Map<String, Object> body) {
        Map<String, Object> novoItem = new HashMap<>(body);
        novoItem.put("id", idCounter++);
        novoItem.put("criadoEm", LocalDateTime.now());
        dados.add(novoItem);
        
        Map<String, Object> response = new HashMap<>();
        response.put("sucesso", true);
        response.put("mensagem", "Item criado com sucesso");
        response.put("dados", novoItem);
        return response;
    }
}`;
    }

    templateApiCSharp() {
        return `// API em C# (.NET 6+)
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.MapGet("/", () => new
{
    status = "API rodando",
    versao = "1.0.0",
    timestamp = DateTime.Now
});

app.Run();

[ApiController]
[Route("api/[controller]")]
public class DadosController : ControllerBase
{
    private static List<dynamic> dados = new();
    private static int idCounter = 1;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            sucesso = true,
            total = dados.Count,
            dados = dados
        });
    }

    [HttpPost]
    public IActionResult Post([FromBody] dynamic body)
    {
        var novoItem = new
        {
            id = idCounter++,
            body,
            criadoEm = DateTime.Now
        };
        dados.Add(novoItem);
        return CreatedAtAction(nameof(Get), novoItem);
    }
}`;
    }

    templateApiPhp() {
        return `<?php
// API em PHP

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Simular banco de dados em memória (usar arquivo ou BD real em produção)
$dados = [];
$idCounter = 1;

$metodo = \$_SERVER['REQUEST_METHOD'];
$rota = parse_url(\$_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Rotas
if (\$rota === '/api/' || \$rota === '/api') {
    if (\$metodo === 'GET') {
        echo json_encode([
            'status' => 'API rodando',
            'versao' => '1.0.0',
            'timestamp' => date('c')
        ]);
    }
} elseif (strpos(\$rota, '/api/dados') === 0) {
    if (\$metodo === 'GET') {
        echo json_encode([
            'sucesso' => true,
            'total' => count(\$dados),
            'dados' => \$dados
        ]);
    } elseif (\$metodo === 'POST') {
        \$input = json_decode(file_get_contents('php://input'), true);
        \$novoItem = array_merge(\$input, [
            'id' => \$idCounter++,
            'criadoEm' => date('c')
        ]);
        \$dados[] = \$novoItem;
        http_response_code(201);
        echo json_encode([
            'sucesso' => true,
            'mensagem' => 'Item criado com sucesso',
            'dados' => \$novoItem
        ]);
    }
} else {
    http_response_code(404);
    echo json_encode(['erro' => 'Rota não encontrada']);
}
?>`;
    }

    templateApiGo() {
        return `package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "time"
)

type Item struct {
    ID        int       \`json:"id"\`
    Nome      string    \`json:"nome"\`
    CriadoEm  time.Time \`json:"criadoEm"\`
}

var dados []Item
var idCounter = 1

func main() {
    http.HandleFunc("/", homeHandler)
    http.HandleFunc("/api/dados", dadosHandler)

    fmt.Println("✅ API rodando em http://localhost:3000")
    log.Fatal(http.ListenAndServe(":3000", nil))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    response := map[string]interface{}{
        "status":    "API rodando",
        "versao":    "1.0.0",
        "timestamp": time.Now(),
    }
    json.NewEncoder(w).Encode(response)
}

func dadosHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")

    switch r.Method {
    case "GET":
        response := map[string]interface{}{
            "sucesso": true,
            "total":   len(dados),
            "dados":   dados,
        }
        json.NewEncoder(w).Encode(response)

    case "POST":
        var item Item
        json.NewDecoder(r.Body).Decode(&item)
        item.ID = idCounter
        item.CriadoEm = time.Now()
        idCounter++
        dados = append(dados, item)

        w.WriteHeader(http.StatusCreated)
        response := map[string]interface{}{
            "sucesso":   true,
            "mensagem":  "Item criado com sucesso",
            "dados":     item,
        }
        json.NewEncoder(w).Encode(response)
    }
}`;
    }

    templateApiRuby() {
        return `require 'sinatra'
require 'json'

set :port, 3000

# Dados em memória
\$dados = []
\$id_counter = 1

get '/' do
    content_type :json
    {
        status: 'API rodando',
        versao: '1.0.0',
        timestamp: Time.now
    }.to_json
end

get '/dados' do
    content_type :json
    {
        sucesso: true,
        total: \$dados.length,
        dados: \$dados
    }.to_json
end

post '/dados' do
    content_type :json
    request.body.rewind
    novo_item = JSON.parse(request.body.read)
    novo_item['id'] = \$id_counter
    novo_item['criadoEm'] = Time.now
    \$id_counter += 1
    \$dados << novo_item

    status 201
    {
        sucesso: true,
        mensagem: 'Item criado com sucesso',
        dados: novo_item
    }.to_json
end`;
    }

    // ==================== TEMPLATES - APP ====================
    templateAppReactNative() {
        return `// App React Native
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';

export default function App() {
    const [contador, setContador] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>📱 Meu App</Text>
                    <Text style={styles.subtitulo}>Criado com React Native</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Contador</Text>
                    <Text style={styles.contador}>{contador}</Text>
                    
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => setContador(contador + 1)}
                    >
                        <Text style={styles.textoBotao}>Incrementar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.botao, styles.botaoSecundario]}
                        onPress={() => setContador(0)}
                    >
                        <Text style={styles.textoBotao}>Resetar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitulo: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    contador: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#3b82f6',
        textAlign: 'center',
        marginBottom: 20,
    },
    botao: {
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    botaoSecundario: {
        backgroundColor: '#e5e7eb',
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});`;
    }

    templateAppAndroid() {
        return `// App Android (Java)
package com.example.meuapp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private int contador = 0;
    private TextView textViewContador;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textViewContador = findViewById(R.id.textViewContador);
        Button botaoIncrementar = findViewById(R.id.botaoIncrementar);
        Button botaoResetar = findViewById(R.id.botaoResetar);

        botaoIncrementar.setOnClickListener(v -> {
            contador++;
            atualizarContador();
        });

        botaoResetar.setOnClickListener(v -> {
            contador = 0;
            atualizarContador();
        });
    }

    private void atualizarContador() {
        textViewContador.setText(String.valueOf(contador));
    }
}`;
    }

    templateAppMAUI() {
        return `// App com .NET MAUI
using Microsoft.Maui;
using Microsoft.Maui.Controls;

namespace MeuApp;

public partial class MainPage : ContentPage
{
    private int contador = 0;

    public MainPage()
    {
        InitializeComponent();
    }

    private void OnIncrementarClicked(object sender, EventArgs e)
    {
        contador++;
        ContadorLabel.Text = \`Contador: {contador}\`;
    }

    private void OnResetarClicked(object sender, EventArgs e)
    {
        contador = 0;
        ContadorLabel.Text = "Contador: 0";
    }
}

// XAML
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="MeuApp.MainPage"
             Title="Meu App">

    <VerticalStackLayout Padding="30" Spacing="20">
        <Label Text="📱 Meu App" FontSize="28" FontAttributes="Bold" HorizontalTextAlignment="Center" />
        
        <Label x:Name="ContadorLabel" Text="Contador: 0" FontSize="48" FontAttributes="Bold" 
               HorizontalTextAlignment="Center" TextColor="#3b82f6" />
        
        <Button Text="Incrementar" Clicked="OnIncrementarClicked" />
        <Button Text="Resetar" Clicked="OnResetarClicked" />
    </VerticalStackLayout>

</ContentPage>`;
    }

    templateAppKivy() {
        return `# App com Kivy
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.core.window import Window

Window.size = (400, 600)

class MeuApp(App):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.contador = 0

    def build(self):
        layout_principal = BoxLayout(orientation='vertical', padding=20, spacing=20)

        # Header
        header = Label(
            text='📱 Meu App',
            size_hint_y=0.2,
            font_size='28sp',
            bold=True
        )
        layout_principal.add_widget(header)

        # Card com contador
        card = GridLayout(cols=1, spacing=15, size_hint_y=0.6)
        
        self.label_contador = Label(
            text='Contador: 0',
            font_size='48sp',
            bold=True,
            color=(0.23, 0.51, 0.95, 1)
        )
        card.add_widget(self.label_contador)

        # Botões
        botao_incrementar = Button(
            text='Incrementar',
            size_hint_y=0.2,
            background_color=(0.23, 0.51, 0.95, 1)
        )
        botao_incrementar.bind(on_press=self.incrementar)
        card.add_widget(botao_incrementar)

        botao_resetar = Button(
            text='Resetar',
            size_hint_y=0.2,
            background_color=(0.9, 0.9, 0.9, 1),
            color=(0, 0, 0, 1)
        )
        botao_resetar.bind(on_press=self.resetar)
        card.add_widget(botao_resetar)

        layout_principal.add_widget(card)

        return layout_principal

    def incrementar(self, instance):
        self.contador += 1
        self.label_contador.text = f'Contador: {self.contador}'

    def resetar(self, instance):
        self.contador = 0
        self.label_contador.text = 'Contador: 0'

if __name__ == '__main__':
    MeuApp().run()`;
    }

    // ==================== MÉTODO PRINCIPAL ====================
    gerar(tipo, linguagem, opcoes, promptLivre) {
        // Se houver prompt livre, processar
        if (promptLivre.trim()) {
            return this.processarPromptLivre(promptLivre, linguagem);
        }

        // Obter template base
        let codigo = this.templates[tipo]?.[linguagem]?.call(this) || '';

        // Adicionar funcionalidades extras
        if (opcoes.login) {
            codigo += this.adicionarLogin(linguagem);
        }

        if (opcoes.banco) {
            codigo += this.adicionarBancoDados(linguagem);
        }

        if (opcoes.crud && tipo === 'api') {
            codigo += this.adicionarCRUD(linguagem);
        }

        return codigo;
    }

    processarPromptLivre(prompt, linguagem) {
        let codigo = `// Código gerado com base no pedido:\n`;
        codigo += `// "${prompt}"\n\n`;

        const promptLower = prompt.toLowerCase();

        if (promptLower.includes('api')) {
            codigo += this.templates.api[linguagem]?.call(this) || this.templateApiJS();
        } else if (promptLower.includes('site')) {
            codigo += this.templates.site[linguagem]?.call(this) || this.templateSiteJS();
        } else if (promptLower.includes('app')) {
            codigo += this.templates.app[linguagem]?.call(this) || this.templateAppReactNative();
        } else if (promptLower.includes('login')) {
            codigo += this.adicionarLogin(linguagem);
        } else {
            codigo += `// Estrutura base para ${linguagem}\nconsole.log('Projeto criado com sucesso!');`;
        }

        return codigo;
    }

    adicionarLogin(linguagem) {
        const logins = {
            javascript: `\n\n// ==================== SISTEMA DE LOGIN ====================
class AutenticacaoJWT {
    constructor(chaveSecreta = 'sua-chave-secreta-aqui') {
        this.chaveSecreta = chaveSecreta;
        this.usuarios = [];
    }

    registrar(email, senha) {
        if (this.usuarios.find(u => u.email === email)) {
            return { sucesso: false, erro: 'Usuário já existe' };
        }
        this.usuarios.push({ email, senha });
        return { sucesso: true, mensagem: 'Usuário registrado com sucesso' };
    }

    login(email, senha) {
        const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);
        if (!usuario) {
            return { sucesso: false, erro: 'Email ou senha inválidos' };
        }
        const token = this.gerarToken(email);
        return { sucesso: true, token, usuario: { email } };
    }

    gerarToken(email) {
        return Buffer.from(\`\${email}:\${Date.now()}\`).toString('base64');
    }

    verificarToken(token) {
        try {
            const [email] = Buffer.from(token, 'base64').toString().split(':');
            return { valido: true, email };
        } catch {
            return { valido: false };
        }
    }
}

// Uso
const auth = new AutenticacaoJWT();
auth.registrar('usuario@email.com', 'senha123');
const resultado = auth.login('usuario@email.com', 'senha123');
console.log(resultado);`,
            python: `\n\n# ==================== SISTEMA DE LOGIN ====================
import hashlib
import jwt
from datetime import datetime, timedelta

class AutenticacaoJWT:
    def __init__(self, chave_secreta='sua-chave-secreta-aqui'):
        self.chave_secreta = chave_secreta
        self.usuarios = []

    def hash_senha(self, senha):
        return hashlib.sha256(senha.encode()).hexdigest()

    def registrar(self, email, senha):
        if any(u['email'] == email for u in self.usuarios):
            return {'sucesso': False, 'erro': 'Usuário já existe'}
        
        self.usuarios.append({
            'email': email,
            'senha': self.hash_senha(senha)
        })
        return {'sucesso': True, 'mensagem': 'Usuário registrado com sucesso'}

    def login(self, email, senha):
        usuario = next((u for u in self.usuarios 
                       if u['email'] == email and u['senha'] == self.hash_senha(senha)), None)
        
        if not usuario:
            return {'sucesso': False, 'erro': 'Email ou senha inválidos'}
        
        token = jwt.encode({
            'email': email,
            'exp': datetime.utcnow() + timedelta(hours=24)
        }, self.chave_secreta, algorithm='HS256')
        
        return {'sucesso': True, 'token': token, 'usuario': {'email': email}}

# Uso
auth = AutenticacaoJWT()
auth.registrar('usuario@email.com', 'senha123')
resultado = auth.login('usuario@email.com', 'senha123')
print(resultado)`,
            java: `\n\n// ==================== SISTEMA DE LOGIN ====================
import java.security.MessageDigest;
import java.util.*;

public class AutenticacaoJWT {
    private String chaveSecreta;
    private List<Usuario> usuarios;

    public AutenticacaoJWT(String chaveSecreta) {
        this.chaveSecreta = chaveSecreta;
        this.usuarios = new ArrayList<>();
    }

    public Map<String, Object> registrar(String email, String senha) {
        if (usuarios.stream().anyMatch(u -> u.email.equals(email))) {
            return Map.of("sucesso", false, "erro", "Usuário já existe");
        }
        usuarios.add(new Usuario(email, hashSenha(senha)));
        return Map.of("sucesso", true, "mensagem", "Usuário registrado com sucesso");
    }

    public Map<String, Object> login(String email, String senha) {
        Usuario usuario = usuarios.stream()
            .filter(u -> u.email.equals(email) && u.senha.equals(hashSenha(senha)))
            .findFirst()
            .orElse(null);

        if (usuario == null) {
            return Map.of("sucesso", false, "erro", "Email ou senha inválidos");
        }

        String token = gerarToken(email);
        return Map.of(
            "sucesso", true,
            "token", token,
            "usuario", Map.of("email", email)
        );
    }

    private String hashSenha(String senha) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(senha.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : hash) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private String gerarToken(String email) {
        return Base64.getEncoder().encodeToString((email + ":" + System.currentTimeMillis()).getBytes());
    }

    static class Usuario {
        String email, senha;
        Usuario(String email, String senha) {
            this.email = email;
            this.senha = senha;
        }
    }
}`,
            php: `\n\n<?php
// ==================== SISTEMA DE LOGIN ====================
class AutenticacaoJWT {
    private \$chaveSecreta;
    private \$usuarios = [];

    public function __construct(\$chaveSecreta = 'sua-chave-secreta-aqui') {
        \$this->chaveSecreta = \$chaveSecreta;
    }

    public function registrar(\$email, \$senha) {
        foreach (\$this->usuarios as \$usuario) {
            if (\$usuario['email'] === \$email) {
                return ['sucesso' => false, 'erro' => 'Usuário já existe'];
            }
        }
        \$this->usuarios[] = [
            'email' => \$email,
            'senha' => password_hash(\$senha, PASSWORD_BCRYPT)
        ];
        return ['sucesso' => true, 'mensagem' => 'Usuário registrado com sucesso'];
    }

    public function login(\$email, \$senha) {
        foreach (\$this->usuarios as \$usuario) {
            if (\$usuario['email'] === \$email && password_verify(\$senha, \$usuario['senha'])) {
                \$token = \$this->gerarToken(\$email);
                return [
                    'sucesso' => true,
                    'token' => \$token,
                    'usuario' => ['email' => \$email]
                ];
            }
        }
        return ['sucesso' => false, 'erro' => 'Email ou senha inválidos'];
    }

    private function gerarToken(\$email) {
        return base64_encode(\$email . ':' . time());
    }
}

// Uso
\$auth = new AutenticacaoJWT();
\$auth->registrar('usuario@email.com', 'senha123');
\$resultado = \$auth->login('usuario@email.com', 'senha123');
echo json_encode(\$resultado);
?>`,
            default: `\n\n// Sistema de Login básico`
        };

        return logins[linguagem] || logins.default;
    }

    adicionarBancoDados(linguagem) {
        const bds = {
            javascript: `\n\n// ==================== CONEXÃO COM BANCO DE DADOS ====================
const mongoose = require('mongoose');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/meu-banco', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schema de exemplo
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: { type: String, unique: true },
    senha: String,
    criadoEm: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Operações CRUD
async function criarUsuario(nome, email, senha) {
    const usuario = new Usuario({ nome, email, senha });
    return await usuario.save();
}

async function obterUsuarios() {
    return await Usuario.find();
}

async function atualizarUsuario(id, dados) {
    return await Usuario.findByIdAndUpdate(id, dados, { new: true });
}

async function deletarUsuario(id) {
    return await Usuario.findByIdAndDelete(id);
}`,
            python: `\n\n# ==================== CONEXÃO COM BANCO DE DADOS ====================
from sqlalchemy import create_engine, Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

# Criar engine
engine = create_engine('sqlite:///banco.db')
Base = declarative_base()
Session = sessionmaker(bind=engine)

# Modelo de exemplo
class Usuario(Base):
    __tablename__ = 'usuarios'
    
    id = Column(Integer, primary_key=True)
    nome = Column(String(100))
    email = Column(String(100), unique=True)
    senha = Column(String(255))
    criado_em = Column(DateTime, default=datetime.now)

# Criar tabelas
Base.metadata.create_all(engine)

# Operações CRUD
def criar_usuario(nome, email, senha):
    session = Session()
    usuario = Usuario(nome=nome, email=email, senha=senha)
    session.add(usuario)
    session.commit()
    return usuario

def obter_usuarios():
    session = Session()
    return session.query(Usuario).all()

def atualizar_usuario(id, **kwargs):
    session = Session()
    usuario = session.query(Usuario).filter_by(id=id).first()
    for chave, valor in kwargs.items():
        setattr(usuario, chave, valor)
    session.commit()
    return usuario

def deletar_usuario(id):
    session = Session()
    usuario = session.query(Usuario).filter_by(id=id).first()
    session.delete(usuario)
    session.commit()`,
            php: `\n\n<?php
// ==================== CONEXÃO COM BANCO DE DADOS ====================
class BancoDados {
    private \$conexao;
    private \$host = 'localhost';
    private \$usuario = 'root';
    private \$senha = '';
    private \$banco = 'meu_banco';

    public function __construct() {
        \$this->conectar();
    }

    private function conectar() {
        \$this->conexao = new mysqli(
            \$this->host,
            \$this->usuario,
            \$this->senha,
            \$this->banco
        );

        if (\$this->conexao->connect_error) {
            die('Erro na conexão: ' . \$this->conexao->connect_error);
        }
    }

    public function criar(\$tabela, \$dados) {
        \$colunas = implode(', ', array_keys(\$dados));
        \$valores = "'" . implode("', '", array_values(\$dados)) . "'";
        
        \$sql = "INSERT INTO \$tabela (\$colunas) VALUES (\$valores)";
        return \$this->conexao->query(\$sql);
    }

    public function obter(\$tabela) {
        \$sql = "SELECT * FROM \$tabela";
        \$resultado = \$this->conexao->query(\$sql);
        return \$resultado->fetch_all(MYSQLI_ASSOC);
    }

    public function atualizar(\$tabela, \$dados, \$condicao) {
        \$set = '';
        foreach (\$dados as \$chave => \$valor) {
            \$set .= "\$chave = '\$valor', ";
        }
        \$set = rtrim(\$set, ', ');
        
        \$sql = "UPDATE \$tabela SET \$set WHERE \$condicao";
        return \$this->conexao->query(\$sql);
    }

    public function deletar(\$tabela, \$condicao) {
        \$sql = "DELETE FROM \$tabela WHERE \$condicao";
        return \$this->conexao->query(\$sql);
    }
}

// Uso
\$db = new BancoDados();
\$db->criar('usuarios', ['nome' => 'João', 'email' => 'joao@email.com']);
?>`,
            default: `\n\n// Conexão com banco de dados`
        };

        return bds[linguagem] || bds.default;
    }

    adicionarCRUD(linguagem) {
        return `\n\n// CRUD já incluído na API acima`;
    }
}

// ==================== FUNÇÕES PRINCIPAIS ====================
const gerador = new GeradorCodigo();

function gerarCodigo() {
    const tipo = document.getElementById('tipoProjeto').value;
    const linguagem = document.getElementById('linguagem').value;
    const promptLivre = document.getElementById('promptLivre').value;
    const login = document.getElementById('login').checked;
    const banco = document.getElementById('banco').checked;
    const crud = document.getElementById('crud').checked;

    const opcoes = { login, banco, crud };
    const codigo = gerador.gerar(tipo, linguagem, opcoes, promptLivre);

    document.getElementById('resultado').value = codigo;

    Notificacao.mostrar('✅ Código gerado com sucesso!', 'sucesso');
}

function copiarCodigo() {
    const textarea = document.getElementById('resultado');
    
    if (!textarea.value.trim()) {
        Notificacao.mostrar('⚠️ Nenhum código para copiar!', 'aviso');
        return;
    }

    textarea.select();
    document.execCommand('copy');
    Notificacao.mostrar('📋 Código copiado para a área de transferência!', 'sucesso');
}

function baixarCodigo() {
    const codigo = document.getElementById('resultado').value;
    const linguagem = document.getElementById('linguagem').value;

    if (!codigo.trim()) {
        Notificacao.mostrar('⚠️ Nenhum código para baixar!', 'aviso');
        return;
    }

    const extensoes = {
        javascript: 'js',
        python: 'py',
        java: 'java',
        csharp: 'cs',
        php: 'php',
        ruby: 'rb',
        go: 'go',
    };

    const extensao = extensoes[linguagem] || 'txt';
    const nomeArquivo = `codigo-gerado.${extensao}`;

    const blob = new Blob([codigo], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    link.click();

    Notificacao.mostrar(`📥 Arquivo ${nomeArquivo} baixado!`, 'sucesso');
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Gerar código ao pressionar Enter na textarea
    document.getElementById('promptLivre').addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            gerarCodigo();
        }
    });
});
