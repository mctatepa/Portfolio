<?php include 'views/partials/header.php' ?>

<div class="windows_xp">
    <div class="all_folders">
        <div class="bin draggable">
            <img class="img_folder" src="<?= URL ?>src/images/recycle-bin.png" alt="">
            <span class="folder_name">Corbeil</span>
        </div>
        <div class="folders draggable folder_2" data-name="projet 1" data-description="Projet experimentent la 3d en webgl avec three-js et annimé avec tween-js" data-screen="3d">
            <img class="img_folder" src="<?= URL ?>src/images/folder.png" alt="">
            <span class="folder_name">projet 1</span>
        </div>
        <div class="folders draggable folder_3" data-name="projet 2" data-description="Projet faisant la compliation de plusieur api de cinema pour donner des note plus complete"data-screen="movin">
            <img class="img_folder" src="<?= URL ?>src/images/folder.png" alt="">
            <span class="folder_name">projet 2</span>
        </div>
        <div class="folders draggable folder_4" data-name="projet 3" data-description="Projet Pojet d'un site realisé pour un kick starter" data-screen="coba">
            <img class="img_folder" src="<?= URL ?>src/images/folder.png" alt="">
            <span class="folder_name">projet 3</span>
        </div>
        <div class="folders draggable folder_5" data-name="projet 4" data-description="Jeux en tour par tour en js orienté objet fait sur des model importer de world of warcraft" data-screen="battle_for_azeroth">
            <img class="img_folder" src="<?= URL ?>src/images/folder.png" alt="">
            <span class="folder_name">projet 4</span>
        </div>
    </div>
    <div class="task_bar">
        <img src="<?= URL ?>src/images/start_logo.png" alt="" class="start_logo">
        <img src="<?= URL ?>src/images/taskbar_end.png" class="task_bar_end">
        <img src="<?= URL ?>src/images/taskbar_start.png" class="task_bar_start">
    </div>
</div>


<?php include 'views/partials/footer.php' ?>