// 假设我们有一些初始的宠物数据
const initialPets = [
{ name: '旺财', type: '狗', age: 3, gender: '男', health: ['健康'], photo: 'dog1.png' },
{ name: '咪咪', type: '猫', age: 2, gender: '女', health: ['需要特殊照顾'], photo: 'cat1.png' }

    // 示例数据，实际应用中可能从服务器获取
];

// 用于显示和隐藏不同屏幕的函数
function showHomeScreen() {
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('data-input-screen').style.display = 'none';
    document.getElementById('data-output-screen').style.display = 'none';
}

function showDataInputScreen() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('data-input-screen').style.display = 'block';
    document.getElementById('data-output-screen').style.display = 'none';
}

function showDataOutputScreen() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('data-input-screen').style.display = 'none';
    document.getElementById('data-output-screen').style.display = 'block';

    // 动态生成宠物列表和分页控件
    generatePetList();
    generatePagination();
}


// 动态生成宠物列表的函数
function generatePetList() {
    const petListContainer = document.querySelector('.pet-list');
    petListContainer.innerHTML = ''; // 清空现有列表

    initialPets.forEach((pet, index) => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <h3>${pet.name}</h3>
            <img src="${pet.photo}" alt="${pet.name}"style="width: 100px; height: 100px;">
            <p><strong>种类:</strong> ${pet.type}</p>
            <p><strong>年龄:</strong> ${pet.age}</p>
            <p><strong>性别:</strong> ${pet.gender}</p>
            <p><strong>健康状况:</strong> ${pet.health}</p>
            <button onclick="viewPetDetails(${index})">查看详情</button>
        `;
        petListContainer.appendChild(petCard);
    });
}

// 动态生成分页控件的函数
function generatePagination() {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ''; // 清空现有分页控件

    // 假设我们有5页数据
    for (let i = 1; i <= 5; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            // 处理分页逻辑
        });
        paginationContainer.appendChild(pageButton);
    }
}

// 查看宠物详情的函数
function viewPetDetails(petIndex) {
    // 显示宠物的详细信息，或者启动领养流程
    alert(`查看宠物详情：${initialPets[petIndex].name}`);
}

// 初始化事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const homeScreenButtons = document.querySelectorAll('.bottom-nav button');
    homeScreenButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switch (index) {
                case 0: showDataInputScreen(); break;
                case 1: showDataOutputScreen(); break;
                // 更多按钮事件处理
            }
        });
    });
});

document.querySelector('.bottom-nav1 button').addEventListener('click', function() {
        // 这里可以添加“噶米噶米组”按钮的逻辑
        alert('欢迎光临流浪宠物收容所，噶米噶米组来咯！');
    });


document.addEventListener('DOMContentLoaded', function () {

    // goBack函数，用于返回主界面
    function goBack() {
        document.getElementById('home-screen').style.display = 'block';
        document.getElementById('data-input-screen').style.display = 'none';
        document.getElementById('data-output-screen').style.display = 'none';
        // 如果有其他的屏幕，也在这里设置它们的display为none

        // 隐藏返回按钮，因为我们已经回到了主界面
        document.getElementById('back-button').style.display = 'none';
    }

    // 为返回按钮绑定点击事件
    document.getElementById('back-button').addEventListener('click', goBack);

    // 显示返回按钮的函数
    function showBackButton() {
        document.getElementById('back-button').style.display = 'block';
    }

    // 绑定事件，当用户导航到特定视图时显示返回按钮
    document.querySelector('.bottom-nav button:nth-child(1)').addEventListener('click', showBackButton); // 领养流程
    document.querySelector('.bottom-nav button:nth-child(2)').addEventListener('click', showBackButton); // 宠物档案
    document.querySelector('.bottom-nav button:nth-child(3)').addEventListener('click', showBackButton); // 我的领养
    document.querySelector('.bottom-nav button:nth-child(4)').addEventListener('click', showBackButton); // 帮助与支持
    // 其他需要显示返回按钮的事件绑定...

});

// 初始显示主界面
showHomeScreen();