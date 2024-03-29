const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("davet")
        .setDescription("Botun davet linklerini gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("v14-genel Bot - İstatistik!")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("Buraya Sunucunuzun Gifini Koyun")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("Buraya Botunuzun Davet Linki"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("Buraya Sunucunuzun Linkini Girin"),
                new ButtonBuilder()
                    .setLabel("Buraya İstediğinizi girin")
                    .setStyle(ButtonStyle.Link)
                    .setURL("Buraya İstediğinizi girin")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
